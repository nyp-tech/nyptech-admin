"use client";

import { Event } from "@/lib/api/events";
import { humanizeDate } from "@/lib/utils";
import Link from "next/link";

export default function EventItem(props: { data: Event }) {
  return (
    <div className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 object-cover rounded-l-box"} src={props.data.publicityUrl} alt={"Preview"} />
      <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.title}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{humanizeDate(props.data.date)}</p>
      </div>
      <div className={"pr-4 flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/events/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
      </div>
    </div>
  );
}