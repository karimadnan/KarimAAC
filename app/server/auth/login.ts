"use server";
import bcrypt from "bcrypt";
import { prisma } from "@karimACC/app/util/prisma";

export async function dbLogin(
  credentials: Partial<Record<"email" | "password", unknown> | undefined>
) {
  try {
    const findAccount = await prisma.accounts.findUnique({
      where: { email: String(credentials?.email) },
    });

    if (!findAccount) return false;

    const comparePasswordHash = bcrypt.compareSync(
      String(credentials?.password),
      findAccount?.password
    );

    if (!comparePasswordHash) {
      return false;
    }

    return findAccount;
  } catch (_) {
    throw new Error("DB error");
  }
}
