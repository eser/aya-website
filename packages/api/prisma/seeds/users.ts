import { type PrismaClientType } from "../client.ts";

const seedUsers = async (prisma: PrismaClientType, languageTrCode: string) => {
  const userEser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      email: "eser@ozvataf.com",
      profilePictureUri: "https://avatars.githubusercontent.com/u/866558?v=4",
      githubHandle: "eser",
      twitterHandle: "eser",

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              fullnameTx: "Eser Ozvataf",
              bioTx:
                "after all, I'm only human • head of engineering @ Teknasyon • founder of acik yazilim • streamer • generalist",
            },
          ],
        },
      },
    },
  });

  return { userEser };
};

export { seedUsers };
