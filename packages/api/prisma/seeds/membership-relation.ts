import { type PrismaClientType } from "../client.ts";

const seedMembershipRelation = async (
  prisma: PrismaClientType,
  profileId: string,
  userId: string,
  role:
    | "Owner"
    | "Lead"
    | "Maintainer"
    | "Contributor"
    | "Sponsor"
    | "Follower",
) => {
  const profileMembership = await prisma.profileMembership.upsert({
    where: {
      profileId_userId: { profileId: profileId, userId: userId },
    },
    update: {
      role: role,
    },
    create: {
      role: role,

      profile: { connect: { id: profileId } },
      user: { connect: { id: userId } },
    },
  });

  return {
    profileMembership,
  };
};

export { seedMembershipRelation };
