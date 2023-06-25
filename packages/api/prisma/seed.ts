import { PrismaClient } from ".prisma/client/edge";

const main = async () => {
  const prisma = new PrismaClient();

  const userEser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      email: "eser@ozvataf.com",
      fullname: "Eser Ozvataf",
      bio:
        "after all, I'm only human • head of engineering @ Teknasyon • founder of acik yazilim • streamer • generalist",
      profilePictureUri: "https://avatars.githubusercontent.com/u/866558?v=4",
      githubHandle: "eser",
      twitterHandle: "eser",
    },
  });

  console.log(userEser);

  await prisma.$disconnect();
};

main();
