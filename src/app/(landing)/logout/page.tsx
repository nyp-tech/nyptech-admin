import SubmitButton from "@/components/submit-button";
import { deleteSession } from "@/session";
import { redirect } from "next/navigation";

export default function Page() {
  const handleForm = async () => {
    "use server";
    await deleteSession();
    redirect("/");
  };

  return (
    <main className={"h-full grid place-items-center"}>
      <form action={handleForm}>
        <div className={"p-8 text-center rounded-box bg-base-200"}>
          <h1 className={"text-2xl font-bold"}>Admin Logout</h1>
          <div className={"my-4"}>
            <p>Are you sure that you want to logout?</p>
          </div>
          <SubmitButton className={"btn btn-warning"}>
            Yes, I&apos;m sure!
          </SubmitButton>
        </div>
      </form>
    </main>
  );
}