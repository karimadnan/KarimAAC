import { Button } from "@karimACC/app/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@karimACC/app/ui/components/card";
import Image from "next/image";
import SplitScreenPaper from "@karimACC/app/ui/components/split-screen-paper";
import CreateAccountForm from "@karimACC/app/modules/create-account-form/create-account-form";

export default function LoginPage() {
  return (
    <SplitScreenPaper
      firstHalfContent={
        <>
          <div className="flex justify-center items-center gap-3 m-5">
            <div>
              <p className="text-slate-50 text-xl font-extrabold">
                Are you ready to start your journey?
              </p>
              <p className="text-slate-50 text-sm font-extralight">
                Only hardcore gamers will survive...
              </p>
              <p className="text-slate-50 text-sm font-extralight">
                Allies, enemies and friends are waiting...
              </p>
            </div>
          </div>
          <Image
            className="object-contain"
            src="/Cinderhoof.png"
            height={450}
            width={450}
            alt="Cinderhoof"
          />
        </>
      }
      secondHalfContent={
        <>
          <CreateAccountForm />
        </>
      }
    />
  );
}
