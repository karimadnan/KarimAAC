import { auth } from "@karimACC/app/auth";
import { getAccountInfo } from "@karimACC/app/server/account/account";
import Image from "next/image";
import PremiumAlert from "./premium-alert";
import CharactersTable from "./characters";

export default async function AccountOverview() {
  const session = await auth();
  const user = session?.user;

  const accountInfo = await getAccountInfo(Number(user?.id));

  return (
    <>
      <div className="flex p-5">
        <Image
          src="/icon-account.gif"
          alt="account-icon"
          height={32}
          width={32}
        />
        <h4 className="text-xl font-bold">Account Management</h4>
      </div>

      <h4 className="text-center font-bold text-xl">
        Welcome to your account {user?.name}!
      </h4>

      <PremiumAlert premiumDays={accountInfo?.premdays || 0} />

      <div className="flex px-5 mt-5 gap-3">
        <Image
          src="/icon-characters.gif"
          height={32}
          width={32}
          alt="icon-characters"
        />
        <h4 className="text-xl font-bold">Characters</h4>
      </div>
      <CharactersTable players={accountInfo?.players || []} />
    </>
  );
}
