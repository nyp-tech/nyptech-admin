import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className={"navbar bg-base-300"}>
      <div className={"navbar-start"}>
        <Link className={"btn btn-ghost"} type={"button"} title={"Home"} href={"/"}>
          <i className={"fa-solid fa-house fa-lg"} />
        </Link>
      </div>
      <div className={"navbar-end"}>
        <Link className={"btn btn-ghost"} type={"button"} title={"Login"} href={"/login"}>
          <i className={"fa-solid fa-key fa-lg"}/>
        </Link>
      </div>
    </nav>
  );
}