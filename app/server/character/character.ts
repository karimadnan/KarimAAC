import { prisma } from "@karimACC/app/util/prisma";
import { VOCATION_ID_TO_NAME } from "@karimACC/app/util/vocation";

export const getVocationSkeleton = async (vocationId: number) => {
  const vocationName = VOCATION_ID_TO_NAME[vocationId];
  const sampleName = `${vocationName} Sample`;

  const vocationSkeleton = await prisma.players.findUnique({
    where: { name: sampleName },
  });

  if (!vocationSkeleton) return null;

  return vocationSkeleton;
};

export const isCharacterNameDuplicate = async (characterName: string) => {
  const isDuplicateCharacterName = await prisma.players.findUnique({
    where: { name: characterName },
  });

  if (isDuplicateCharacterName)
    return { message: "Character name already exists." };

  return null;
};
