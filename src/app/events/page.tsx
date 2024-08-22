import { getEvents } from "@/lib/api/main";
import Link from "next/link";

export default async function Page() {
  const events = await getEvents();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={`/events/new`}>
        New Event
      </Link>
      {events.map((event) => (
        <div key={event.id} className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
          <img className={"w-16 sm:w-24 rounded-l-box"} src={event.img} alt={"Preview"} />
          <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
            <h2 className={"text-lg font-bold truncate"}>{event.title}</h2>
            <p className={"text-sm text-gray-400 truncate"}>{event.location}</p>
          </div>
          <div className={"pr-4 flex items-center"}>
            <div className={"tooltip"} data-tip={"Edit"}>
              <Link className={"btn btn-sm btn-ghost"} href={`/events/${event.id}`}>
                <i className={"fa-solid fa-pen"} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}