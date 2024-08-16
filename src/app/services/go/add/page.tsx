import { setLink } from "@/lib/api/go";
import { redirect } from "next/navigation";

export default async function Page(props: { params: { id: string } }) {
  const handleSave = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const url = data.get("url") as string;
    const success = await setLink(id, {
      url,
      description: "", // TODO
    });
    if (success) {
      redirect("/services/go");
    } else {
      redirect("/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Add Link</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input className={"input"} type={"text"} name={"id"} required={true} placeholder={"ID"} />
            <input className={"input"} type={"url"} name={"url"} required={true} placeholder={"URL"} />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleSave}>
              Add
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}