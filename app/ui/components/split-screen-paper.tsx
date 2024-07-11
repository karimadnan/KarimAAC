import { Button } from "@karimACC/app/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@karimACC/app/ui/components/card";
import { cn } from "@karimACC/app/util/common";
import Image from "next/image";

export interface SplitScreenPaperProps {
  firstHalfContent: React.ReactNode;
  secondHalfContent: React.ReactNode;
  classNames?: {
    base?: string;
    firstHalf?: string;
    secondHalf?: string;
  };
}

export default function SplitScreenPaper({
  firstHalfContent,
  secondHalfContent,
  classNames,
}: SplitScreenPaperProps) {
  return (
    <div className={cn("flex", classNames?.base)}>
      <div
        className={cn(
          "hidden w-1/2 lg:flex flex-col justify-center items-center bg-slate-900 rounded-tl-md rounded-bl-md",
          classNames?.firstHalf
        )}
      >
        {firstHalfContent}
      </div>
      <div
        className={cn(
          "w-full lg:w-1/2  flex justify-center",
          classNames?.secondHalf
        )}
      >
        {secondHalfContent}
      </div>
    </div>
  );
}
