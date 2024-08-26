"use client";

import { deleteEventAction, updateEventAction } from "@/app/events/actions";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import FormControl from "@/components/ui/form-control";
import { UploadButton } from "@/components/uploadthing-buttons";
import { getEvent, type Event } from "@/lib/api/events";
import { useEffect, useState } from "react";

export default function Page(props: { params: { id: string } }) {
  const id = props.params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<Event | undefined>();
  const [date, setDate] = useState<string | undefined>();
  const [publicityUrl, setPublicityUrl] = useState<string | undefined>();

  useEffect(() => {
    getEvent(id).then((event) => {
      if (!event) return;
      console.log(event);
      setEvent(event);
      setDate(event.date.toISOString().split("T")[0]);
      setPublicityUrl(event.publicityUrl);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Loading />;
  if (!event) return <NotFound />;

  return (
    <main className={"p-4 grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl type={"text"} name={"id"} label={"ID"} defaultValue={event.id} required readOnly />
            <FormControl type={"text"} name={"title"} label={"Title"} defaultValue={event.title} required />
            <FormControl
              type={"textarea"}
              name={"description"}
              label={"Description"}
              defaultValue={event.description}
              required
            />
            <FormControl
              type={"text"}
              name={"organizer"}
              label={"Event Organizer"}
              defaultValue={event.organizer}
              required
            />
            <FormControl
              type={"date"}
              name={"date"}
              label={"Date of Event"}
              defaultValue={date}
              required
            />
            <FormControl type={"url"} name={"url"} label={"URL"} defaultValue={event.url} required />
            <FormControl
              type={"url"}
              name={"publicityUrl"}
              label={"Publicity URL"}
              value={publicityUrl}
              required
              readOnly
            />
            {publicityUrl ? (
              <div className={"mt-4 flex justify-center"}>
                <button
                  className={"btn btn-info"}
                  onClick={() => {
                    setPublicityUrl(undefined);
                  }}
                >
                  Upload Again
                </button>
              </div>
            ) : (
              <UploadButton
                className={"mt-4"}
                endpoint={"general"}
                onClientUploadComplete={(res) => {
                  setPublicityUrl(res[0].url);
                }}
                onUploadError={(err) => {
                  alert("Unable to upload! " + err.message);
                }}
              />
            )}
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={updateEventAction}>
              Save
            </button>
            <button className={"btn btn-sm btn-error"} formAction={deleteEventAction}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}