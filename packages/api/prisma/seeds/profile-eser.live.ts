import { type PrismaClientType } from "../client.ts";

const seedProfileEserLive = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileEserLive = await prisma.profile.upsert({
    where: { slug: "eser.live" },
    update: {},
    create: {
      type: "Product",
      slug: "eser.live",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/eserlive.png",

        showStories: true,
        showMembers: true,

        languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "eser.live",
              descriptionTx: "Eser Ozvataf YouTube Kanalı",
            },
          ],
        },
      },
    },
  });

  const profileLinkYouTube = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileEserLive.id, slug: "youtube" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileEserLive.id } },
      slug: "youtube",
      uri: "https://youtube.com/@eserlive",
      iconSet: "lucide",
      iconKey: "youtube",
      order: 1,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "YouTube",
              descriptionTx: "YouTube kanalım",
            },
          ],
        },
      },
    },
  });

  const profileLinkTelegram = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileEserLive.id, slug: "telegram" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileEserLive.id } },
      slug: "telegram",
      uri: "https://t.me/eserlive",
      iconSet: null,
      iconKey: null,
      order: 2,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Telegram",
              descriptionTx: "Telegram Duyuru Kanalı",
            },
          ],
        },
      },
    },
  });

  const profilePageIndex = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEserLive.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileEserLive.id } },
      slug: "index",
      order: 1,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Bilgi",
              contentTx: `---
title: Bilgi
date: 2022-08-21
---

Bir süredir “live coding”in ötesine geçme hedefiyle başladığım sohbet, proje inceleme, framework/proje unboxing, preview inceleme ve konferans izleme başta olmak üzere farklı formatlarla radyo programı havasında gerçekleşen yayınlar yapıyorum. Bu yayınların bildirimlerine Twitter hesabım (https://twitter.com/eser) üzerinden ulaşabilirsiniz.`,
            },
          ],
        },
      },
    },
  });

  const profilePageConfiguration = await prisma.profilePage.upsert({
    where: {
      profileId_slug: { profileId: profileEserLive.id, slug: "configuration" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileEserLive.id } },
      slug: "configuration",
      order: 2,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Geliştirme Ortamı",
              contentTx: `---
title: Geliştirme Ortamı
date: 2022-08-21
---

**Editor:** Visual Studio Code
**Tema:** [One Dark Pro Monokai Darker Theme](https://marketplace.visualstudio.com/items?itemName=eserozvataf.one-dark-pro-monokai-darker)
**Font:** Iosevka Light Extended`,
            },
          ],
        },
      },
    },
  });

  return {
    profileEserLive,
    profileLinkYouTube,
    profileLinkTelegram,
    profilePageIndex,
    profilePageConfiguration,
  };
};

export { seedProfileEserLive };
