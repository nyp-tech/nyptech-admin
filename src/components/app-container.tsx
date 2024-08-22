import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className={"drawer lg:drawer-open"}>
      <input id={"drawer-state"} className={"drawer-toggle"} type={"checkbox"} />
      <div className={"h-dvh drawer-content grid grid-rows-[auto,1fr]"}>
        <nav className={"navbar bg-base-300"}>
          <div className={"navbar-start"}>
            <label className={"btn btn-ghost lg:hidden"} htmlFor={"drawer-state"}>
              <i className={"fa-solid fa-bars fa-xl"} />
            </label>
          </div>
          <div className={"navbar-end"}>
            <div className={"mr-2 flex items-center"}>
              <UserButton />
            </div>
          </div>
        </nav>
        {props.children}
      </div>
      <div className={"drawer-side"}>
        <label className={"drawer-overlay"} htmlFor={"drawer-state"} />
        <div className={"h-dvh bg-base-300"}>
          <nav className={"navbar"}>
            <Link className={"max-lg:w-full btn btn-ghost"} href={"https://nyptech.vercel.app"}>
              <img className={"size-8"} src={"https://nyptech.vercel.app/assets?id=logo"} alt={"Logo"} />
            </Link>
          </nav>
          <ul className={"w-56 menu"}>
            <li>
              <Link href={"/"}>
                <i className={"fa-solid fa-gauge"} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href={"/events"}>
                <i className={"fa-solid fa-calendar-days"} />
                Events
              </Link>
            </li>
            <li>
              <Link href={"/keys"}>
                <i className={"fa-solid fa-key"} />
                Keys
              </Link>
            </li>
            <li>
              <details open>
                <summary>
                  <i className={"fa-solid fa-server"} />
                  Services
                </summary>
                <ul>
                  <li>
                    <Link href={"/services/go"}>Link Centralization</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href={"/services/learn"}>Learners Platform</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}