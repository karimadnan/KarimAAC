import { prisma } from "../util/prisma";

export default async function Highscores() {
  const res = await prisma.players.findMany({
    where: {
      deletion: 0,
      group_id: {
        lt: 4,
      },
    },
    orderBy: {
      experience: "desc",
    },
  });

  console.log(res, "res");
  return <h1>HIGHSCORES</h1>;
}
