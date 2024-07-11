import { NextAuthConfig } from "next-auth";
import { dbLogin } from "./server/auth/login";
import Credentials from "@auth/core/providers/credentials";
import { userSchema } from "./models/schemas";

export const nextAuthConfig = {
  basePath: "/api/auth",
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      type: "credentials",
      async authorize(credentials) {
        const validateCredentials = userSchema.safeParse(credentials);

        if (validateCredentials.success === false) {
          return null;
        }

        try {
          const account = await dbLogin(credentials);
          if (account) {
            return { id: `${account.id}`, name: account.name };
          }
        } catch (error) {
          throw new Error("Login failed.");
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
    async jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id };
      }
      return token;
    },
    session: ({ session, token }) => {
      const sessionClone = session;
      if (token.id) {
        sessionClone.user.id = String(token.id);
      }
      return sessionClone;
    },
  },
} satisfies NextAuthConfig;
