"use client";

import { Redirect } from "@/lib/api/links";
import Link from "next/link";

export default function LinkItem(props: { data: Redirect }) {
  const copyUrl = () => {
    navigator.clipboard.writeText(`https://nyptech-go.vercel.app/${props.data.id}`);
  };

  return (
    <div className={"px-6 py-2 h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <div className={"min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.id}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{props.data.url}</p>
      </div>
      <div className={"flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/services/go/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Copy"}>
          <button className={"btn btn-sm btn-ghost"} onClick={copyUrl}>
            <i className={"fa-solid fa-copy"} />
          </button>
        </div>
      </div>
    </div>
  );
}