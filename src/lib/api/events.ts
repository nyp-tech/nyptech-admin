type Event = {
  id: string;
  title: string;
  description: string;
  signup: string;
  location: string;
  club: string;
  img: string;
  date: Date;
  userId: string;
};

const apiUrl = "https://nyptech-api.vercel.app/v1";

export function createEvent(data: Omit<Event, "id">) {
  return fetch(`${apiUrl}/events`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data as Event)
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
    .then((data) => data as Event)
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
    .then((data) => data as Event[])
    .catch((err) => {
      console.error(err);
      return [] as Event[];
    });
}

export function deleteEvent(id: string) {
  return fetch(`${apiUrl}/events`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  })
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
}