import { TES_GO_KEY } from "@/environment";

export type RedirectRecord = {
  url: string;
  description?: string;
};

export type Redirect = RedirectRecord & {
  id: string;
};

const apiKey = TES_GO_KEY;
const apiUrl = "https://nyptech-go.vercel.app/api";

export function setLink(id: string, record: RedirectRecord) {
  return fetch(`${apiUrl}/manage/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record),
  })
    .then((res) => res.ok)
    .catch((err) => {
      console.error(err);
      return false;
    });
}

export function getLink(id: string) {
  return fetch(`${apiUrl}/manage/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data as Redirect)
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export function getLinks() {
  return fetch(`${apiUrl}/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data as Redirect[])
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export function deleteLink(id: string) {
  return fetch(`${apiUrl}/manage/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.ok)
    .catch((err) => {
      console.error(err);
      return false;
    });
}