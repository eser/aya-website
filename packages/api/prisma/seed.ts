import { PrismaClient } from "../generated/client";

const main = async () => {
  const prisma = new PrismaClient();

  const eser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      email: "eser@ozvataf.com",
      name: "Eser",
      posts: {
        create: {
          title: "Hello world!",
          content: "https://acikyazilimagi.com/",
          published: true,
        },
      },
    },
  });

  console.log(eser);

  await prisma.$disconnect();
};

main();
