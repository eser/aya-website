import * as Regular from ".prisma/client";
import * as Edge from ".prisma/client/edge";

const getDatabaseConfiguration = () => {
  if (typeof Deno !== "undefined") {
    return [
      Deno.env.get("DATABASE_URL"),
      Deno.env.get("DATABASE_ON_EDGE")?.startsWith("prisma://") ?? false,
    ];
  }

  return [
    process.env.DATABASE_URL,
    process.env.DATABASE_ON_EDGE?.startsWith("prisma://") ?? false,
  ];
};

const getPrismaClient = () => {
  const [databaseUrl, isOnEdge] = getDatabaseConfiguration();
  const PrismaClient = isOnEdge ? Edge.PrismaClient : Regular.PrismaClient;

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  });

  return prisma;
};

type PrismaClientType = ReturnType<typeof getPrismaClient>;

export { getDatabaseUrl, getPrismaClient, type PrismaClientType };
