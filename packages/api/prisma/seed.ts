import { getPrismaClient } from "./client.ts";

import { seedLanguages } from "./seeds/languages.ts";
import { seedProfileAya } from "./seeds/profile-aya.ts";
import { seedProfileEser } from "./seeds/profile-eser.ts";
import { seedProfileEserLive } from "./seeds/profile-eser.live.ts";
import { seedUsers } from "./seeds/users.ts";

const main = async () => {
  const prisma = getPrismaClient();

  const { languageTr } = await seedLanguages(prisma);
  const { userEser } = await seedUsers(prisma, languageTr.code);
  const { profileAya } = await seedProfileAya(prisma, languageTr.code);
  const { profileEser } = await seedProfileEser(prisma, languageTr.code);
  const { profileEserLive } = await seedProfileEserLive(
    prisma,
    languageTr.code,
  );

  await prisma.$disconnect();
};

main();
