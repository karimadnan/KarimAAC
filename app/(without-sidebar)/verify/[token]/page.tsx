import { VerifyFailed, VerifySuccess } from "@karimACC/app/modules/verify";
import { verifyEmail } from "@karimACC/app/server/account";
import Link from "next/link";

interface PageProps {
  params: {
    token: string;
  };
}

export default async function Page({ params: { token } }: PageProps) {
  const verifyAction = await verifyEmail(token);

  return (
    <div className="grid place-items-center p-4">
      {verifyAction?.message ? (
        <VerifyFailed reason={verifyAction.message} />
      ) : (
        <VerifySuccess />
      )}
      <p>
        return to account
        <Link
          href={"/account"}
          className="text-slate-900 font-bold underline ms-1"
        >
          page
        </Link>
      </p>
    </div>
  );
}
