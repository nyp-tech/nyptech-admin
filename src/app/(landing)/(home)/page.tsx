import Link from "next/link";

export default function Page() {
  return (
    <main className={"h-full grid place-items-center"}>
      <div className={"text-center"}>
        <img
          className={"mx-auto mb-4 size-[200px]"}
          src={"/assets/logo.png"}
          alt={"Icon"}
        />
        <div className={"mb-2 text-3xl font-bold"}>
          NYP Technopreneurship Club
        </div>
        <div className={"mb-4"}>
          Developing an entrepreneurial mindset across the SIT student body with
          the application of technology.
        </div>
        <Link className={"btn btn-primary"} href={"https://nyptech.vercel.app"}>
          Learn more!
        </Link>
      </div>
    </main>
  );
}