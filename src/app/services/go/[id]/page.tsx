import NotFound from "@/app/not-found";
import { deleteLink, getLink, setLink } from "@/lib/api/go";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const id = props.params.id;
  const record = await getLink(id);

  if (!record) {
    return <NotFound />;
  }

  const handleSave = async (data: FormData) => {
    "use server";
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

  const handleDelete = async () => {
    "use server";
    const success = await deleteLink(id);
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
          <h2 className={"card-title self-center"}>Edit Link</h2>
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
              type={"url"}
              name={"url"}
              required={true}
              placeholder={"URL"}
              defaultValue={record.url}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleSave}>
              Save
            </button>
            <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}