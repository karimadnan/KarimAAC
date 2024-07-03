import LoginMenu from "../modules/login-menu/page";
import Paper from "../ui/components/paper";

export default function WithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between mt-5">
      <Paper className="w-[100%] md:w-[75%]">{children}</Paper>
      <div className="hidden md:block w-[24%]">
        <LoginMenu />
      </div>
    </div>
  );
}
