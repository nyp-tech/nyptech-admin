"use server";

import { createEvent, deleteEvent, updateEvent } from "@/lib/api/events";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createEventAction(data: FormData) {
  const { userId } = auth();
  console.log("userId", userId);

  const success = await createEvent({
    title: data.get("title") as string,
    description: data.get("description") as string,
    organizer: data.get("organizer") as string,
    date: new Date(data.get("date") as string),
    url: data.get("url") as string,
    publicityUrl: data.get("publicityUrl") as string,
  });

  console.log(success);

  if (success) {
    redirect("/events");
  } else {
    redirect("/error");
  }
}

export async function updateEventAction(data: FormData) {
  const event = await updateEvent({
    id: data.get("id") as string,
    title: data.get("title") as string,
    description: data.get("description") as string,
    organizer: data.get("organizer") as string,
    date: new Date(data.get("date") as string),
    url: data.get("url") as string,
    publicityUrl: data.get("publicityUrl") as string,
  });

  if (event) {
    redirect("/events");
  } else {
    redirect("/error");
  }
}

export async function deleteEventAction(data: FormData) {
  const success = await deleteEvent(data.get("id") as string);
  if (success) {
    redirect("/events");
  } else {
    redirect("/error");
  }
}