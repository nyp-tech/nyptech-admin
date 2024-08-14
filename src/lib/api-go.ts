export type RedirectRecord = {
  url: string;
  description: string;
};

export type Redirect = RedirectRecord & {
  id: string;
};

const API_KEY = "tesclub2024";

export function setRedirect(id: string, record: RedirectRecord) {
  return fetch(`https://nyptech-go.vercel.app/api/manage/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record),
  }).then((res) => {
    console.log(res);
    return res.ok;
  });
}

export function getRedirect(id: string) {
  return fetch(`https://nyptech-go.vercel.app/api/manage/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data as Redirect);
}

export function getRedirects() {
  return fetch("https://nyptech-go.vercel.app/api/all", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data as Redirect[]);
}

export function deleteRedirect(id: string) {
  return fetch(`https://nyptech-go.vercel.app/api/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }).then((res) => res.ok);
}