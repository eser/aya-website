import { getPrismaClient } from "./client.ts";

import { seedLanguages } from "./seeds/languages.ts";
import { seedProfileAfetOrg } from "./seeds/profile-afet.org.ts";
import { seedProfileAya } from "./seeds/profile-aya.ts";
import { seedProfileDn } from "./seeds/profile-dn.ts";
import { seedProfileEser } from "./seeds/profile-eser.ts";
import { seedProfileEserLive } from "./seeds/profile-eser.live.ts";
import { seedProfileGonulluIo } from "./seeds/profile-gonullu.io.ts";
import { seedProfileHex } from "./seeds/profile-hex.ts";
import { seedUsers } from "./seeds/users.ts";
import { seedMembershipRelation } from "./seeds/membership-relation.ts";

const main = async () => {
  const prisma = getPrismaClient();

  // languages
  const { languageTr } = await seedLanguages(prisma);

  // users
  const { userEser } = await seedUsers(prisma, languageTr.code);

  // profile: afet.org
  const { profileAfetOrg } = await seedProfileAfetOrg(prisma, languageTr.code);
  await seedMembershipRelation(prisma, profileAfetOrg.id, userEser.id, "Owner");

  // profile: aya
  const { profileAya } = await seedProfileAya(prisma, languageTr.code);
  await seedMembershipRelation(prisma, profileAya.id, userEser.id, "Owner");

  // profile: developer networks
  const { profileDn } = await seedProfileDn(prisma, languageTr.code);
  await seedMembershipRelation(prisma, profileDn.id, userEser.id, "Owner");

  // profile: eser ozvataf
  const { profileEser } = await seedProfileEser(prisma, languageTr.code);
  await seedMembershipRelation(prisma, profileEser.id, userEser.id, "Owner");

  // profile: eser.live
  const { profileEserLive } = await seedProfileEserLive(
    prisma,
    languageTr.code,
  );
  await seedMembershipRelation(
    prisma,
    profileEserLive.id,
    userEser.id,
    "Owner",
  );

  // profile: gonullu.io
  const { profileGonulluIo } = await seedProfileGonulluIo(
    prisma,
    languageTr.code,
  );
  await seedMembershipRelation(
    prisma,
    profileGonulluIo.id,
    userEser.id,
    "Owner",
  );

  // profile: hex
  const { profileHex } = await seedProfileHex(prisma, languageTr.code);
  await seedMembershipRelation(prisma, profileHex.id, userEser.id, "Owner");

  await prisma.$disconnect();
};

main();
