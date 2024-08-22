import { redirect } from "next/navigation";

export default async function Page(props: { params: { id: string } }) {

  const handleSave = async (data: FormData) => {
    "use server";

    // TODO

    redirect("/events");
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-[90%] sm:w-[70%] lg:w-[50%] card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>New Event</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input
              className={"input"}
              type={"text"}
              name={"title"}
              required={true}
              placeholder={"Title"}
            />
            <textarea
              className={"textarea"}
              name={"description"}
              required={true}
              placeholder={"Description"}
            />
            <input
              className={"input"}
              type={"text"}
              name={"location"}
              required={true}
              placeholder={"Location"}
            />
            <input
              className={"input"}
              type={"url"}
              name={"url"}
              required={true}
              placeholder={"Signup URL"}
            />
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