import { prisma } from "@karimACC/app/util/prisma";

export async function getAccountInfo(accountId: number) {
  const accountInfo = await prisma.accounts.findUnique({
    where: { id: accountId },
    select: {
      coins_transferable: true,
      email: true,
      premdays: true,
      players: true,
    },
  });

  return accountInfo || null;
}
