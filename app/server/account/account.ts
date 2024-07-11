"use server";

import bcrypt from "bcrypt";
import { CreateAccountModel } from "@karimACC/app/models/common";
import { createAccountSchema } from "@karimACC/app/models/schemas";
import { prisma } from "@karimACC/app/util/prisma";

export async function getAccountInfo(accountId: number) {
  const accountInfo = await prisma.accounts.findUnique({
    where: { id: accountId },
    select: {
      coins_transferable: true,
      email: true,
      premdays: true,
      players: {
        select: {
          name: true,
          level: true,
          id: true,
          PlayerOnline: true,
          vocation: true,
        },
      },
    },
  });

  return accountInfo || null;
}

export async function createAccount(accountInfo: CreateAccountModel) {
  const validateData = createAccountSchema.safeParse(accountInfo);

  if (validateData.success === false) {
    return { message: "Invalid account data." };
  }

  const isDuplicate = await prisma.accounts.findUnique({
    where: { email: accountInfo.email },
  });

  if (isDuplicate) return { message: "Email already exists." };

  const accountDataClone = structuredClone(accountInfo);
  accountDataClone.sex = Number(accountDataClone.sex);

  const passwordHash = bcrypt.hashSync(accountInfo.password, 10);
}
