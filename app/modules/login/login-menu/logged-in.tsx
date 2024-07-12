import { getAccountInfo } from "@karimACC/app/server/account/account";
import { auth } from "@karimACC/app/auth";
import { cn } from "@karimACC/app/util/common";
import Image from "next/image";
import AccountActions from "./menu-actions";

export default async function LoggedIn() {
  const session = await auth();
  const user = session?.user;

  const accountInfo = await getAccountInfo(Number(user?.id));

  if (!accountInfo) return <h1>Failed to get account info!</h1>;
  return (
    <>
      <p>
        Welcome, <span className="font-bold">{user?.name}</span>
      </p>
      <p>
        <span className="font-bold">
          Total Characters: ({accountInfo.players.length})
        </span>
      </p>
      <div className="flex mt-4 items-center">
        <Image
          src={"/tibia-coins.webp"}
          height={32}
          width={32}
          alt="tibia-coins"
          unoptimized
        />
        <p
          className={cn(
            "text-xl font-bold ml-4",
            accountInfo.coins_transferable > 0
              ? "text-green-500"
              : "text-red-500"
          )}
        >
          {accountInfo.coins_transferable}
        </p>
      </div>
      <AccountActions />
    </>
  );
}
