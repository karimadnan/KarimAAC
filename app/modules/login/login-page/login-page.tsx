import { Button } from "@karimACC/app/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@karimACC/app/ui/components/card";
import Image from "next/image";
import LoginForm from "../login/login-form";
import SplitScreenPaper from "@karimACC/app/ui/components/split-screen-paper";

export default function LoginPage() {
  return (
    <SplitScreenPaper
      firstHalfContent={
        <>
          <div className="flex justify-center items-center gap-3 mb-5">
            <p className="text-slate-50">Account lost? No worries</p>
            <Button variant="outline">Lost account</Button>
          </div>
          <Image
            className="object-contain"
            src="/Waccoon.png"
            height={350}
            width={350}
            alt="waccoon"
          />
        </>
      }
      secondHalfContent={
        <Card className="w-[350px] m-10">
          <CardHeader>
            <div className="flex">
              <Image
                src="/icon-account.gif"
                alt="account-icon"
                height={32}
                width={32}
              />
              <CardTitle>Login</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      }
    />
  );
}
