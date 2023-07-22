import { type PrismaClientType } from "../client.ts";

const seedLanguages = async (prisma: PrismaClientType) => {
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

  return { languageTr, languageEn };
};

export { seedLanguages };
