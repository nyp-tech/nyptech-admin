import { getAllRedirects } from "@/app/admin/microservices/go/utils";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const redirects = await getAllRedirects();

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] flex flex-col gap-4"}>
        <ul className={"flex flex-col gap-2"}>
          <li>
            <Link className={"w-full btn"} href={"/admin/microservices/go/add"}>
              <i className={"fa-solid fa-plus"} />
              Add
            </Link>
          </li>
          {redirects.map((redirect) => (
            <li
              key={redirect.id}
              className={
                "p-4 flex max-sm:flex-col max-sm:gap-4 rounded-lg bg-base-200"
              }
            >
              <div className={"flex-1"}>
                <div className={"font-bold text-lg"}>
                  <span>https://go.tes.club/</span>
                  <Link className={"underline"} href={redirect.url}>
                    {redirect.id}
                  </Link>
                </div>
                <div className={"text-sm"}>{redirect.description}</div>
              </div>
              <div className={"flex-none flex items-center gap-4"}>
                <Link
                  className={"transition hover:opacity-80"}
                  title={"Edit"}
                  href={`/admin/microservices/go/edit/${redirect.id}`}
                >
                  <i className={"fa-solid fa-pen"} />
                </Link>
                <Link
                  className={"transition hover:opacity-80"}
                  title={"Delete"}
                  href={`/admin/microservices/go/delete/${redirect.id}`}
                >
                  <i className={"fa-solid fa-trash"} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}