import bcrypt from "bcrypt";
import { CreateAccountModel } from "@karimACC/app/models/common";
import { players } from "@prisma/client";

export const constructAccountData = (
  accountInfo: CreateAccountModel,
  vocationTemplate: players,
  verifySecret: string
) => {
  const passwordHash = bcrypt.hashSync(accountInfo.password, 10);

  const { account_id, id, sex, ...restTemplate } = vocationTemplate;

  const characterData = {
    ...restTemplate,
    name: accountInfo.characterName,
    sex: Number(accountInfo.sex),
  };

  const account = {
    name: accountInfo.characterName,
    email: accountInfo.email,
    password: passwordHash,
    type: 1,
    verified: false,
    creation: Math.trunc(Date.now() / 1000),
    verify_token: verifySecret,
  };

  return { account, characterData };
};
