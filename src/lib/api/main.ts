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

const apiUrl = "https://nyptech.vercel.app/api";

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