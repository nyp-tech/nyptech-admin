import NavigationBar from "@/components/navigation-bar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div
      className={"h-full grid grid-rows-[auto,1fr] [&>main]:overflow-y-auto"}
    >
      <NavigationBar />
      {props.children}
    </div>
  );
}