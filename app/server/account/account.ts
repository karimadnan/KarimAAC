"use server";

import { CreateAccountModel } from "@karimACC/app/models/common";
import { createAccountSchema } from "@karimACC/app/models/schemas";
import { prisma } from "@karimACC/app/util/prisma";
import {
  getVocationSkeleton,
  isCharacterNameDuplicate,
} from "../character/character";
import { constructAccountData } from "./utils";
import { nodemailerTransporter } from "@karimACC/app/util/nodemailer";

const isEmailDuplicate = async (email: string) => {
  const isDuplicateEmail = await prisma.accounts.findUnique({
    where: { email: email },
  });

  if (isDuplicateEmail) return { message: "Email already exists." };
};

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

export async function createAccountAction(accountInfo: CreateAccountModel) {
  // Check if data struct is as expected
  const validateData = createAccountSchema.safeParse(accountInfo);

  if (validateData.success === false) {
    return { message: "Invalid account data." };
  }

  // Check duplicate info
  const isDuplicateEmail = await isEmailDuplicate(accountInfo.email);
  if (isDuplicateEmail) return { message: isDuplicateEmail.message };

  const isDuplicateCharacterName = await isCharacterNameDuplicate(
    accountInfo.characterName
  );

  if (isDuplicateCharacterName)
    return { message: isDuplicateCharacterName.message };

  // Get vocation template data to populate character info
  const vocationSample = await getVocationSkeleton(
    Number(accountInfo.vocation)
  );
  if (!vocationSample)
    return { message: "Failed to load vocation data please report to GM." };

  vocationSample.name = accountInfo.characterName;

  const verifySecret = crypto.randomUUID();

  const creationData = constructAccountData(
    accountInfo,
    vocationSample,
    verifySecret
  );

  try {
    await prisma.accounts.create({
      data: {
        ...creationData.account,
        players: { createMany: { data: [creationData.characterData] } },
      },
    });
  } catch (error) {
    return { message: "Failed while trying to create account." };
  }

  await nodemailerTransporter.sendMail({
    from: "KarimAAC",
    to: "kimocaramila@gmail.com",
    subject: "Verify your KarimAAC account",
    html: `
    <main>
      <b>SERVER NAME verify your account</b>

      <p>Clicking on the following link will <a href="${process.env.APP_URL}/verify/${verifySecret}">verify</a> your account.</p>
      If you did not sign up please ignore this email.
    </main>
    `,
  });
}

export async function verifyEmail(secret: string) {
  const findEmail = await prisma.accounts.findFirst({
    where: {
      verify_token: secret,
    },
  });

  if (findEmail?.verified) return { message: "Email is already verified!" };

  if (!findEmail) return { message: "Invalid link" };

  const accountVerify = await prisma.accounts.update({
    where: {
      id: findEmail.id,
    },
    data: {
      verified: true,
      verify_token: null,
    },
  });

  if (!accountVerify.verified)
    return {
      message: "Failed to update verification status, please try again later!",
    };
}
