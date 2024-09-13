const apiUrl = "https://nyptech-api.vercel.app/v1";
// const apiUrl = "http://localhost:3001/v1";

export type Link = {
  id: string;
  url: string;
  description?: string;
};

export type LinkStats = {
  id: string;
  clicks: number;
};

export function setLink(data: Link) {
  return fetch(`${apiUrl}/links`, {
    method: "POST",
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
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => data as Link)
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export function getLinkStats(id: string) {
  return fetch(`${apiUrl}/links/stats?id=${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => data as LinkStats)
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export function getLinks() {
  return fetch(`${apiUrl}/links`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => data as Link[])
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export function deleteLink(id: string) {
  return fetch(`${apiUrl}/links?id=${id}`, {
    method: "DELETE",
  })
    .then((res) => res.ok)
    .catch((err) => {
      console.error(err);
      return false;
    });
}