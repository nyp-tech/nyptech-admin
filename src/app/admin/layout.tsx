import Link from "next/link";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"drawer lg:drawer-open"}>
      <input
        id={"drawer-toggle"}
        className={"drawer-toggle"}
        type={"checkbox"}
      />
      <div className={"h-dvh drawer-content"}>
        <div
          className={
            "h-full grid grid-rows-[auto,1fr] [&>main]:overflow-y-auto"
          }
        >
          <div className={"navbar bg-base-300"}>
            <div className={"navbar-start"}>
              <label
                className={"btn btn-circle lg:hidden"}
                htmlFor={"drawer-toggle"}
              >
                <i className={"fa-solid fa-bars fa-xl"} />
              </label>
            </div>
            <div className={"navbar-end"}>
              <details className={"dropdown dropdown-end"}>
                <summary className={"btn btn-circle btn-ghost"}>
                  <i className={"fa-solid fa-bell fa-xl"} />
                </summary>
                <ul
                  className={
                    "dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow"
                  }
                >
                  <li>
                    <Link href={"/admin/notifications"}>Notifications</Link>
                  </li>
                  <div className={"my-0 divider"} />
                  <li>
                    <Link href={"/logout"}>Logout</Link>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          {props.children}
        </div>
      </div>
      <div className={"drawer-side"}>
        <label className={"drawer-overlay"} htmlFor={"drawer-toggle"} />
        <ul className={"min-h-full w-80 menu bg-base-300"}>
          <li className={"mb-2"}>
            <Link className={"text-xl"} href={"/admin"}>
              <img className={"w-10"} src={"/assets/logo.png"} alt={"Logo"} />
              NYP TES Club
            </Link>
          </li>
          <li>
            <Link href={"/admin/dashboard"}>
              <i className={"fa-solid fa-home"} />
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}