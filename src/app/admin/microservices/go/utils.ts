import { MsGo_Key } from "@/environment";

const baseUrl = "https://nyptech-go.vercel.app/api";
const bearerKey = MsGo_Key;

export function setRedirect(
  id: string,
  data: {
    description: string;
    url: string;
  }
) {
  return fetch(`${baseUrl}/set?id=${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerKey}`,
    },
    body: JSON.stringify(data),
  });
}

export function getRedirect(id: string) {
  return fetch(`${baseUrl}/get?id=${id}`)
    .then((res) => res.json())
    .then((data) => data as { id: string; description: string; url: string });
}

export function getAllRedirects() {
  return fetch(`${baseUrl}/get-all`, {
    headers: {
      Authorization: `Bearer ${bearerKey}`,
    },
  })
    .then((res) => res.json())
    .then(
      (data) =>
        data as {
          id: string;
          description: string;
          url: string;
        }[]
    );
}

export function deleteRedirect(id: string) {
  return fetch(`${baseUrl}/delete?id=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${bearerKey}`,
    },
  });
}