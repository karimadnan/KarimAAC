import { auth } from "../../auth";
import LoginForm from "../../modules/login-menu/login-form";

export default async function Account() {
  const session = await auth();

  if (!session?.user) return <h1>umnath</h1>;
  return <h1>Account</h1>;
}
