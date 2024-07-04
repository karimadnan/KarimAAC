import { cn } from "@karimACC/app/util/common";

export default function Paper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("bg-white rounded-md", className)}>{children}</div>;
}
