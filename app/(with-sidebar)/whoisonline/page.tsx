import { prisma } from "@karimACC/app/util/prisma";

export default async function WhoIsOnline() {
  const res = await prisma.playerOnline.count({
    where: { player: { group_id: { lt: 4 } } },
  });

  console.log(res, "res");
  return <h1>WHO IS ONLINE</h1>;
}
