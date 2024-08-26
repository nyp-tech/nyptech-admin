import { TES_GO_KEY } from "@/environment";

const apiKey = TES_GO_KEY;
const apiUrl = "https://nyptech-api.vercel.app/v1";

export type Redirect = {
  id: string;
  url: string;
  description?: string;
};

export function setLink(data: Redirect) {
  return fetch(`${apiUrl}/links`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.ok)
    .catch((err) => {
      console.error(err);
      return false;
    });
}

export function getLink(id: string) {
  return fetch(`${apiUrl}/links?id=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => data as Redirect)
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export function getLinks() {
  return fetch(`${apiUrl}/links`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => data as Redirect[])
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export function deleteLink(id: string) {
  return fetch(`${apiUrl}/links`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.ok)
    .catch((err) => {
      console.error(err);
      return false;
    });
}