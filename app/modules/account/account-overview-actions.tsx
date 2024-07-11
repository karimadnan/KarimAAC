"use client";

import { signOut } from "@karimACC/app/server/auth/auth";
import { Button } from "@karimACC/app/ui/components/button";

export default function AccountOverviewActions({
  isPremium,
}: {
  isPremium: boolean;
}) {
  return (
    <>
      <Button size="sm" className="md:w-[350px]">
        Manage Account
      </Button>
      {isPremium ? (
        <Button size="sm" variant="secondary">
          Buy Coins
        </Button>
      ) : (
        <Button size="sm" variant="positive">
          Get Premium
        </Button>
      )}
      <Button size="sm" variant="destructive" onClick={() => signOut()}>
        Logout
      </Button>
    </>
  );
}
