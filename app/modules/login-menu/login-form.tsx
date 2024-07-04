"use client";

import { signIn } from "@karimACC/app/server/helpers/auth";
import { Button } from "@karimACC/app/ui/components/button";
import { Input } from "@karimACC/app/ui/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const login = () => {
    if (!isLoading) {
      setIsLoading(true);
      signIn({
        email: "karimmadnan@gmail.com",
        password: "karim",
      })
        .then(() => {
          setIsLoading(false);
          router.refresh();
        })
        .catch(console.log);
    }
  };

  return (
    <>
      <Input className="mb-3" placeholder="Email" type="email" />
      <Input placeholder="password" type="password" />
      <Button
        isLoading={isLoading}
        className="w-full my-2"
        onClick={() => login()}
      >
        Login
      </Button>
      <Button className="w-full" variant="positive">
        Creat Account
      </Button>
    </>
  );
}
