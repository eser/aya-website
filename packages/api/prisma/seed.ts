import { PrismaClient } from ".prisma/client/edge";

const main = async () => {
  const prisma = new PrismaClient();

  const userEser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      email: "eser@ozvataf.com",
    },
  });

  console.log(userEser);

  await prisma.$disconnect();
};

main();
