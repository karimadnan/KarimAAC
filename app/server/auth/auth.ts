"use server";

import { signIn as NASignIn, signOut as NASignOut } from "@karimACC/app/auth";
import { DefaultApiResponse } from "@karimACC/app/models/common";
import { AuthError } from "next-auth";

export async function signIn(
  credentials: Record<"email" | "password", string>
): Promise<DefaultApiResponse> {
  try {
    await NASignIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid email or password." };
        default:
          return { message: "Something went wrong." };
      }
    }
  }
}

export async function signOut() {
  await NASignOut();
}
