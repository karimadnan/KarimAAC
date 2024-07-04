"use client";

import { signOut } from "@karimACC/app/server/helpers/auth";
import { Button } from "@karimACC/app/ui/components/button";
import { useRouter } from "next/navigation";

export default function AccountActions() {
  const router = useRouter();

  return (
    <>
      <Button className="mt-4 w-full" onClick={() => router.push("/account")}>
        ACCOUNT PAGE
      </Button>
      <Button
        className="mt-2 w-full"
        variant="destructive"
        onClick={() => signOut()}
      >
        LOGOUT
      </Button>
    </>
  );
}
