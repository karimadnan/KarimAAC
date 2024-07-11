"use server";

import { prisma } from "@karimACC/app/util/prisma";

export async function dbLogin(
  credentials: Partial<Record<"email" | "password", unknown> | undefined>
) {
  try {
    const findAccount = await prisma.accounts.findUnique({
      where: { email: String(credentials?.email) },
    });

    if (!findAccount || findAccount.password !== credentials?.password) {
      return false;
    }

    return findAccount;
  } catch (_) {
    throw new Error("DB error");
  }
}
