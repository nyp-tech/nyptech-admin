import { getLinks } from "@/lib/api/go";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const links = await getLinks();
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      <Link className={"btn btn-primary"} href={"/microservices/go/add"}>
        Add Link
      </Link>
      {links.map((link) => (
        <Link key={link.id} className={"btn"} href={`/microservices/go/${link.id}`}>
          {link.id}
        </Link>
      ))}
    </main>
  );
}