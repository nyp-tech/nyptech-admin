import NotFound from "@/app/not-found";
import { getEvent } from "@/lib/api/main";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const id = props.params.id;
  const record = await getEvent(id);

  if (!record) {
    return <NotFound />;
  }

  const handleSave = async (data: FormData) => {
    "use server";

    // TODO

    redirect("/events");
  };

  const handleDelete = async () => {
    "use server";

    // TODO

    redirect("/events");
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input
              className={"input"}
              type={"text"}
              name={"id"}
              required={true}
              readOnly={true}
              placeholder={"ID"}
              defaultValue={record.id}
            />
            <input
              className={"input"}
              type={"text"}
              name={"title"}
              required={true}
              readOnly={true}
              placeholder={"Title"}
              defaultValue={record.title}
            />
            <textarea
              className={"textarea"}
              name={"description"}
              required={true}
              readOnly={true}
              placeholder={"Description"}
              defaultValue={record.description}
            />
            <input
              className={"input"}
              type={"text"}
              name={"location"}
              required={true}
              readOnly={true}
              placeholder={"Location"}
              defaultValue={record.location}
            />
            <input
              className={"input"}
              type={"url"}
              name={"url"}
              required={true}
              readOnly={true}
              placeholder={"Signup URL"}
              defaultValue={record.signup}
            />
          </div>
          <div className={"card-actions justify-end"}>
            {/* <button className={"btn btn-sm btn-primary"} formAction={handleSave}>
              Save
            </button> */}
            <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}