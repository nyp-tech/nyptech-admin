import EventItem from "@/app/events/_components/event-item";
import { getEvents } from "@/lib/api/events";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const events = await getEvents();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={`/events/new`}>
        New Event
      </Link>
      {events.map((event) => (
        <EventItem key={event.id} data={event} />
      ))}
    </main>
  );
}