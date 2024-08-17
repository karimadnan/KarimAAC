import { auth } from "@karimACC/app/auth";
import LoggedIn from "./logged-in";
import { Suspense } from "react";
import Paper from "@karimACC/app/ui/components/paper";
import LoginForm from "../login-form";
import AccountLoading from "../../account/account-loading";

export default async function LoginMenu() {
  const session = await auth();
  const user = session?.user;

  return (
    <Paper className="p-5">
      {!user?.id ? (
        <LoginForm />
      ) : (
        <Suspense fallback={<AccountLoading />}>
          <LoggedIn />
        </Suspense>
      )}
    </Paper>
  );
}
