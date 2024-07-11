import AccountOverview from "@karimACC/app/modules/account/account-overview";
import { auth } from "../../auth";
import LoginForm from "../../modules/login-form/login-form";
import { Suspense } from "react";
import LoginPage from "@karimACC/app/modules/login-page/login-page";

export default async function Account() {
  const session = await auth();

  if (!session?.user) return <LoginPage />;
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <AccountOverview />
    </Suspense>
  );
}
