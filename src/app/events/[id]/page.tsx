import NotFound from "@/app/not-found";
import FormControl from "@/components/ui/form-control";
import { deleteEvent, getEvent } from "@/lib/api/events";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const id = props.params.id;
  const record = await getEvent(id);

  if (!record) {
    return <NotFound />;
  }

  const handleDelete = async () => {
    "use server";
    const success = await deleteEvent(record.id);
    if (success) {
      redirect("/events");
    } else {
      redirect("/error");
    }
  };

  return (
    <main className={"p-4 grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <FormControl
              type={"text"}
              name={"id"}
              label={"ID"}
              required={true}
              readOnly={true}
              defaultValue={record.id}
            />
            <FormControl
              type={"text"}
              name={"title"}
              label={"Title"}
              required={true}
              readOnly={true}
              defaultValue={record.title}
            />
            <FormControl
              type={"textarea"}
              name={"description"}
              label={"Description"}
              required={true}
              readOnly={true}
              defaultValue={record.description}
            />
            <FormControl
              type={"text"}
              name={"location"}
              label={"Location"}
              required={true}
              readOnly={true}
              defaultValue={record.location}
            />
            <FormControl
              type={"text"}
              name={"organizer"}
              label={"Club Organizer"}
              required={true}
              readOnly={true}
              defaultValue={record.location}
            />
            <FormControl
              type={"url"}
              name={"signupUrl"}
              label={"Signup URL"}
              required={true}
              readOnly={true}
              defaultValue={record.signup}
            />
            <FormControl
              type={"url"}
              name={"publicityUrl"}
              label={"Publicity URL"}
              required={true}
              readOnly={true}
              defaultValue={record.img}
            />
            <FormControl
              type={"date"}
              name={"date"}
              label={"Date of Event"}
              required={true}
              readOnly={true}
              defaultValue={record.date.toString()}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}