import Paper from "@karimACC/app/ui/components/paper";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-5">
      <Paper className="w-full min-h-80">{children}</Paper>
    </div>
  );
}
