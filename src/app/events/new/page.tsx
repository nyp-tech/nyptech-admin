"use client";

import { createEventAction } from "@/app/events/actions";
import FormControl from "@/components/ui/form-control";
import { MyUploadButton } from "@/components/uploadthing-buttons";
import { useState } from "react";

export default function Page() {
  const [publicityUrl, setPublicityUrl] = useState<string | undefined>();

  return (
    <main className={"p-4 grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>New Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl type={"text"} name={"title"} label={"Title"} required />
            <FormControl type={"textarea"} name={"description"} label={"Description"} required />
            <FormControl type={"text"} name={"organizer"} label={"Event Organizer"} required />
            <FormControl type={"date"} name={"date"} label={"Date of Event"} required />
            <FormControl type={"url"} name={"url"} label={"URL"} required />
            <div>
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
            </div>
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={createEventAction}>
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}