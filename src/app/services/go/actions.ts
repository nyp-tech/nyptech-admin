"use server";

import { deleteLink, setLink } from "@/lib/api/links";
import { redirect } from "next/navigation";

export async function saveLinkAction(data: FormData) {
  const id = data.get("id") as string;
  const url = data.get("url") as string;
  const success = await setLink({
    id,
    url,
    description: "", // TODO
  });

  if (success) {
    redirect("/services/go");
  } else {
    redirect("/error");
  }
}

export async function deleteLinkAction(data: FormData) {
  const id = data.get("id") as string;
  const success = await deleteLink(id);

  if (success) {
    redirect("/services/go");
  } else {
    redirect("/error");
  }
}