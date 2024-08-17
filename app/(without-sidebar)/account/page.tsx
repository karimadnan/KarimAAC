import AccountOverview from "@karimACC/app/modules/account/account-overview";
import { auth } from "../../auth";
import { Suspense } from "react";
import LoginPage from "@karimACC/app/modules/login/login-page/login-page";
import AccountLoading from "@karimACC/app/modules/account/account-loading";

export default async function Account() {
  const session = await auth();

  if (!session?.user) return <LoginPage />;
  return (
    <Suspense fallback={<AccountLoading />}>
      <AccountOverview />
    </Suspense>
  );
}
