import LoginForm from "../login/login-form";
import { auth } from "@karimACC/app/auth";
import LoggedIn from "./logged-in";
import { Suspense } from "react";
import Paper from "@karimACC/app/ui/components/paper";

export default async function LoginMenu() {
  const session = await auth();
  const user = session?.user;

  return (
    <Paper className="p-5">
      {!user?.id ? (
        <LoginForm />
      ) : (
        <Suspense fallback={<h1>Loading</h1>}>
          <LoggedIn />
        </Suspense>
      )}
    </Paper>
  );
}
