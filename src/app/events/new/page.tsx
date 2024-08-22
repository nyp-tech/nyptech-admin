import FormControl from "@/components/ui/form-control";
import { createEvent } from "@/lib/api/main";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const handleSave = async (data: FormData) => {
    "use server";

    const { userId } = auth();
    console.log("userId", userId);

    const success = await createEvent({
      title: data.get("title") as string,
      description: data.get("description") as string,
      location: data.get("location") as string,
      club: data.get("organizer") as string,
      signup: data.get("signupUrl") as string,
      img: data.get("publicityUrl") as string,
      date: new Date(data.get("date") as string),
      userId: userId ?? "unknown",
    });

    console.log(success);

    if (success) {
      redirect("/events");
    } else {
      redirect("/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>New Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl type={"text"} name={"title"} label={"Title"} required={true} />
            <FormControl type={"textarea"} name={"description"} label={"Description"} required={true} />
            <FormControl type={"text"} name={"location"} label={"Location"} required={true} />
            <FormControl type={"text"} name={"organizer"} label={"Organizer"} required={true} />
            <FormControl type={"url"} name={"signupUrl"} label={"Signup URL"} required={true} />
            <FormControl type={"url"} name={"publicityUrl"} label={"Publicity URL"} required={true} />
            <FormControl type={"date"} name={"date"} label={"Date of Event"} required={true} />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}