"use server";

import { createEvent } from "@/lib/api/events";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createEventAction(data: FormData) {
  const { userId } = auth();
  console.log("userId", userId);

  const success = await createEvent({
    title: data.get("title") as string,
    description: data.get("description") as string,
    organizer: data.get("organizer") as string,
    url: data.get("url") as string,
    publicityUrl: data.get("publicityUrl") as string,
    date: new Date(data.get("date") as string),
  });

  console.log(success);

  if (success) {
    redirect("/events");
  } else {
    redirect("/error");
  }
}