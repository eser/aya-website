import { getPrismaClient } from "./client.ts";

const main = async () => {
  const prisma = getPrismaClient();

  const languageTr = await prisma.language.upsert({
    where: { code: "tr" },
    update: {},
    create: {
      code: "tr",
      name: "Türkçe",
      englishName: "Turkish",
      order: 0,
      flag: "🇹🇷",
    },
  });

  const languageEn = await prisma.language.upsert({
    where: { code: "en" },
    update: {},
    create: {
      code: "en",
      name: "English",
      englishName: "English",
      order: 1,
      flag: "🇬🇧",
    },
  });

  const userEser = await prisma.user.upsert({
    where: { email: "eser@ozvataf.com" },
    update: {},
    create: {
      email: "eser@ozvataf.com",
      profilePictureUri: "https://avatars.githubusercontent.com/u/866558?v=4",
      githubHandle: "eser",
      twitterHandle: "eser",
      fullname: "Eser Ozvataf",
      bio:
        "after all, I'm only human • head of engineering @ Teknasyon • founder of acik yazilim • streamer • generalist",

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTr.code,
              fullnameTx: "Eser Ozvataf",
              bioTx:
                "after all, I'm only human • head of engineering @ Teknasyon • founder of acik yazilim • streamer • generalist",
            },
          ],
        },
      },
    },
  });

  const profileEser = await prisma.profile.upsert({
    where: { slug: "eser" },
    update: {},
    create: {
      type: "Individual",
      slug: "eser",
      email: "eser@ozvataf.com",
      title: "Eser Ozvataf",
      description: "founder of acik yazilim • streamer • generalist",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/eser.png",
    },
  });

  const profileEserLive = await prisma.profile.upsert({
    where: { slug: "eser.live" },
    update: {},
    create: {
      type: "Product",
      slug: "eser.live",
      email: "eser+live@ozvataf.com",
      title: "eser.live",
      description: "Eser Ozvataf YouTube Kanalı",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/eserlive.png",
    },
  });

  await prisma.$disconnect();
};

main();
