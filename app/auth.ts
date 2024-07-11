import NextAuth from "next-auth";
import { nextAuthConfig } from "./auth-config";

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthConfig);
