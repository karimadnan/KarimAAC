import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { type NextAuthConfig } from "next-auth";
import { dbLogin } from "./server/auth/login";

export const nextAuthConfig = {
  basePath: "/api/auth",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      type: "credentials",
      async authorize(credentials) {
        const account = await dbLogin(credentials);

        if (account) {
          return { id: `${account.id}`, name: account.name };
        }
        return null;
      },
    }),
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: "karimAAC_session",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: String(token.id),
        },
      };
    },
  },
} satisfies NextAuthConfig;

export const {
  handlers,
  auth,
  signIn: NASignIn,
  signOut: NASignOut,
} = NextAuth(nextAuthConfig);
