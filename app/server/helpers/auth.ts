"use server";

import { NASignIn, NASignOut } from "@karimACC/app/auth";

export async function signIn(
  credentials: Record<"email" | "password", string>
) {
  await NASignIn("credentials", {
    email: credentials.email,
    password: credentials.password,
    redirect: false,
  });
}

export async function signOut() {
  await NASignOut();
}
