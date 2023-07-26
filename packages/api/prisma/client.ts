import * as Regular from ".prisma/client";
import * as Edge from ".prisma/client/edge";

const getDatabaseConfiguration = () => {
  const isDeno = typeof Deno !== "undefined";
  const env = isDeno ? Deno.env.toObject() : process.env;

  return [
    env.DATABASE_URL,
    env.DATABASE_ON_EDGE === "1" || env.DATABASE_URL?.startsWith("prisma://"),
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
