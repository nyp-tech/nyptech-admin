import { getRedirects } from "@/lib/api-go";
import Link from "next/link";

export default async function Page() {
  const redirects = await getRedirects();
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      <Link className={"btn btn-primary"} href={"/microservices/go/add"}>
        Add Link
      </Link>
      {redirects.map((redirect) => (
        <Link key={redirect.id} className={"btn"} href={`/microservices/go/${redirect.id}`}>
          {redirect.id}
        </Link>
      ))}
    </main>
  );
}