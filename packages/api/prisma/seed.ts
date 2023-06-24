import { PrismaClient } from ".prisma/client/edge";

const main = async () => {
  const prisma = new PrismaClient();

  const eser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      slug: "eser",
      email: "eser@ozvataf.com",
      name: "Eser",
      posts: {
        create: {
          slug: "hello-world",
          title: "Hello world!",
          content: "https://acikyazilimagi.com/",
          publishedAt: new Date(),
        },
      },
    },
  });

  console.log(eser);

  await prisma.$disconnect();
};

main();
