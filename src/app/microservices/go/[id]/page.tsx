import { deleteRedirect, getRedirect, setRedirect } from "@/lib/api-go";
import { redirect } from "next/navigation";

export default async function Page(props: { params: { id: string } }) {
  const id = props.params.id;

  if (!id) {
    return <></>;
  }

  const handleEdit = async (data: FormData) => {
    "use server";

    const id = data.get("id") as string;
    const url = data.get("url") as string;

    if (!id || !url || id === "add") {
      return;
    }

    const success = await setRedirect({
      id,
      url,
      description: "",
    });

    if (success) {
      redirect("/microservices/go");
    } else {
      redirect("/error");
    }
  };

  const handleDelete = async (data: FormData) => {
    "use server";

    const id = data.get("id") as string;

    if (!id) {
      return;
    }

    const success = await deleteRedirect(id);

    if (success) {
      redirect("/microservices/go");
    } else {
      redirect("/error");
    }
  };

  const isNew = id === "add";
  const redirectId = isNew ? "" : id;
  const redirectUrl = isNew ? "" : (await getRedirect(id)).url;

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Manage Redirect</h2>
          <div className={"my-2 space-y-2"}>
            <input
              className={"block input"}
              type={"text"}
              name={"id"}
              required={true}
              placeholder={"ID"}
              defaultValue={redirectId}
              readOnly={!isNew}
            />
            <input
              className={"block input"}
              type={"url"}
              name={"url"}
              required={true}
              placeholder={"URL"}
              defaultValue={redirectUrl}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-info"} formAction={handleEdit}>
              {isNew ? "Add" : "Save"}
            </button>
            {isNew || (
              <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}