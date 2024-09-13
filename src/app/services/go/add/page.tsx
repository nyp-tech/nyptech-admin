"use client";

import { saveLinkAction } from "@/app/services/go/actions";
import FormControl from "@/components/ui/form-control";
import FormStatus from "@/components/ui/form-status";

export default function Page() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Add Link</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl label={"ID"}>
              <input className={"input"} type={"text"} name={"id"} required />
            </FormControl>
            <FormControl label={"URL"}>
              <input className={"input"} type={"url"} name={"url"} required />
            </FormControl>
          </div>
          <div className={"card-actions justify-end"}>
            <FormStatus>
              <FormStatus.Active>
                <button className={"btn btn-sm btn-primary"} formAction={saveLinkAction}>
                  Add
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