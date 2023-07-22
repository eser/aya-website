import * as Regular from ".prisma/client";
import * as Edge from ".prisma/client/edge";

const getDatabaseUrl = () => {
  if (typeof Deno !== "undefined") {
    return Deno.env.get("DATABASE_URL");
  }

  return process.env.DATABASE_URL;
};

const getPrismaClient = () => {
  const databaseUrl = getDatabaseUrl();
  const isEdge = databaseUrl.startsWith("prisma://");

  const PrismaClient = isEdge ? Edge.PrismaClient : Regular.PrismaClient;

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
