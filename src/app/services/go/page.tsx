import { getLinks } from "@/lib/api/go";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const links = await getLinks();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={"/services/go/add"}>
        Add Link
      </Link>
      {links.map((link) => (
        <div key={link.id} className={"px-6 py-2 h-16 sm:h-24 flex rounded-box bg-base-300"}>
          <div className={"min-w-0 flex-1 flex flex-col justify-center"}>
            <h2 className={"text-lg font-bold truncate"}>{link.id}</h2>
            <p className={"text-sm text-gray-400 truncate"}>{link.url}</p>
          </div>
          <div className={"flex items-center"}>
            <div className={"tooltip"} data-tip={"Edit"}>
              <Link className={"btn btn-sm btn-ghost"} href={`/services/go/${link.id}`}>
                <i className={"fa-solid fa-pen"} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}