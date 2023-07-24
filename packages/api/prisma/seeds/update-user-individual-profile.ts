import { type PrismaClientType } from "../client.ts";

const updateUserIndividualProfile = async (
  prisma: PrismaClientType,
  userId: string,
  profileId: string,
) => {
  const userUpdate = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      individualProfile: { connect: { id: profileId } },
    },
  });

  return {
    userUpdate,
  };
};

export { updateUserIndividualProfile };
