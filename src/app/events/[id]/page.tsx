"use client";

import { deleteEventAction, updateEventAction } from "@/app/events/actions";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import FormControl from "@/components/ui/form-control";
import FormStatus from "@/components/ui/form-status";
import { MyUploadButton } from "@/components/uploadthing-buttons";
import { getEvent, type Event } from "@/lib/api/events";
import { humanizeDate } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page(props: { params: { id: string } }) {
  const id = props.params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<Event | undefined>();
  const [date, setDate] = useState<string | undefined>();
  const [publicityUrl, setPublicityUrl] = useState<string | undefined>();

  useEffect(() => {
    getEvent(id)
      .then((event) => {
        if (!event) return;
        setEvent(event);
        setDate(humanizeDate(event.date));
        setPublicityUrl(event.publicityUrl);
      })
      .finally(() => {
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
            <FormControl label={"ID"}>
              <input className={"input"} type={"text"} name={"id"} defaultValue={event.id} required readOnly />
            </FormControl>
            <FormControl label={"Title"}>
              <input className={"input"} type={"text"} name={"title"} defaultValue={event.title} required />
            </FormControl>
            <FormControl label={"Description"}>
              <input
                className={"input"}
                type={"textarea"}
                name={"description"}
                defaultValue={event.description}
                required
              />
            </FormControl>
            <FormControl label={"Organizer"}>
              <input className={"input"} type={"text"} name={"organizer"} defaultValue={event.organizer} required />
            </FormControl>
            <FormControl label={"Date of Event"}>
              <input className={"input"} type={"date"} name={"date"} defaultValue={date} required />
            </FormControl>
            <FormControl label={"URL"}>
              <input className={"input"} type={"url"} name={"url"} defaultValue={event.url} required />
            </FormControl>
            <FormControl label={"Publicity URL"}>
              <input className={"input"} type={"url"} name={"publicityUrl"} value={publicityUrl} required readOnly />
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
                <MyUploadButton
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
            </FormControl>
          </div>
          <div className={"card-actions justify-end"}>
            <FormStatus>
              <FormStatus.Active>
                <button className={"btn btn-sm btn-primary"} formAction={updateEventAction}>
                  Save
                </button>
                <button className={"btn btn-sm btn-error"} formAction={deleteEventAction}>
                  Delete
                </button>
              </FormStatus.Active>
              <FormStatus.Pending>
                <button className={"btn btn-sm"} disabled>
                  <i className={"loading loading-sm loading-dots"} />
                </button>
              </FormStatus.Pending>
            </FormStatus>
          </div>
        </form>
      </div>
    </main>
  );
}