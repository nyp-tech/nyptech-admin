import { z } from "zod";

const apiUrl = "https://nyptech-api.vercel.app/v1";
// const apiUrl = "http://localhost:3001/v1";

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  organizer: z.string(),
  date: z.coerce.date(),
  url: z.string(),
  publicityUrl: z.string(),
});

export type Event = z.infer<typeof eventSchema>;

export function createEvent(data: Omit<Event, "id">) {
  return fetch(`${apiUrl}/events`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => eventSchema.parse(data) as Event)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}

export function getEvent(id: string) {
  return fetch(`${apiUrl}/events?id=${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => eventSchema.parse(data) as Event)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}

export function getEvents() {
  return fetch(`${apiUrl}/events`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data.map((event: any) => eventSchema.parse(event)) as Event[])
    .catch((err) => {
      console.error(err);
      return [] as Event[];
    });
}

export function updateEvent(data: Event) {
  return fetch(`${apiUrl}/events`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => eventSchema.parse(data) as Event)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}

export function deleteEvent(id: string) {
  return fetch(`${apiUrl}/events?id=${id}`, {
    method: "DELETE",
  })
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
}