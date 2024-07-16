import SubmitButton from "@/components/submit-button";
import { createSession } from "@/session";
import { redirect } from "next/navigation";

export default function Page() {
  const handleForm = async (form: FormData) => {
    "use server";
    const key = form.get("key") as string;
    if (await createSession(key)) {
      redirect("/admin");
    } else {
      // TODO: Alert user that login failed
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <form action={handleForm}>
        <div className={"p-8 text-center rounded-box bg-base-200"}>
          <h1 className={"text-2xl font-bold"}>Admin Login</h1>
          <div className={"my-4 flex flex-col gap-2"}>
            <input
              className={"input input-bordered"}
              type={"password"}
              name={"key"}
              placeholder={"Key"}
            />
          </div>
          <SubmitButton className={"btn btn-primary"}>
            Login
          </SubmitButton>
        </div>
      </form>
    </main>
  );
}