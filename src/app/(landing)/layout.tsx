import NavigationBar from "@/components/navigation-bar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"h-dvh grid grid-rows-[auto_1fr]"}>
      <NavigationBar />
      {props.children}
    </div>
  );
}