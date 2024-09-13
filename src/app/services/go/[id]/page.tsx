"use client";

import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import { deleteLinkAction, saveLinkAction } from "@/app/services/go/actions";
import FormControl from "@/components/ui/form-control";
import FormStatus from "@/components/ui/form-status";
import { getLink, getLinkStats, Link, LinkStats } from "@/lib/api/links";
import { useEffect, useState } from "react";

export default function Page(props: { params: { id: string } }) {
  const id = props.params.id;

  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState<Link | null>(null);
  const [linkStats, setLinkStats] = useState<LinkStats | null>(null);

  useEffect(() => {
    Promise.all([
      getLink(id).then((link) => {
        if (!link) return;
        setLink(link);
      }),
      getLinkStats(id).then((stats) => {
        if (!stats) return;
        setLinkStats(stats);
      }),
    ]).finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loading />;
  if (!link || !linkStats) return <NotFound />;

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit Link</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl label={"ID"}>
              <input className={"input"} type={"text"} name={"id"} defaultValue={link.id} required readOnly />
            </FormControl>
            <FormControl label={"URL"}>
              <input className={"input"} type={"url"} name={"url"} defaultValue={link.url} required />
            </FormControl>
            <FormControl label={"Clicks"}>
              <input
                className={"input"}
                type={"number"}
                name={"clicks"}
                defaultValue={linkStats.clicks}
                required
                readOnly
              />
            </FormControl>
          </div>
          <div className={"card-actions justify-end"}>
            <FormStatus>
              <FormStatus.Active>
                <button className={"btn btn-sm btn-primary"} formAction={saveLinkAction}>
                  Save
                </button>
                <button className={"btn btn-sm btn-error"} formAction={deleteLinkAction}>
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