"use client";

import { createEventAction } from "@/app/events/actions";
import FormControl from "@/components/ui/form-control";
import FormStatus from "@/components/ui/form-status";
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
            <FormControl label={"Title"}>
              <input className={"input"} type={"text"} name={"title"} required />
            </FormControl>
            <FormControl label={"Description"}>
              <input className={"input"} type={"textarea"} name={"description"} required />
            </FormControl>
            <FormControl label={"Event Organizer"}>
              <input className={"input"} type={"text"} name={"organizer"} required />
            </FormControl>
            <FormControl label={"Date of Event"}>
              <input className={"input"} type={"date"} name={"date"} required />
            </FormControl>
            <FormControl label={"URL"}>
              <input className={"input"} type={"url"} name={"url"} required />
            </FormControl>
            <div>
              <FormControl label={"Publicity URL"}>
                <input className={"input"} type={"url"} name={"publicityUrl"} value={publicityUrl} required readOnly />
              </FormControl>
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
            <FormStatus>
              <FormStatus.Active>
                <button className={"btn btn-sm btn-primary"} formAction={createEventAction}>
                  Save
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