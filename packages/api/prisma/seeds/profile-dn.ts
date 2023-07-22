import { type PrismaClientType } from "../client.ts";

const seedProfileDn = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileDn = await prisma.profile.upsert({
    where: { slug: "dn" },
    update: {},
    create: {
      type: "Organization",
      slug: "dn",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/dn.png",

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Developer Networks",
              descriptionTx: "developernetworks.org",
            },
          ],
        },
      },
    },
  });

  const profileLinkWebsite = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileDn.id, slug: "website" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileDn.id } },
      slug: "website",
      uri: "https://developernetworks.org",
      iconSet: null,
      iconKey: null,
      order: 1,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Website",
              descriptionTx: "Website",
            },
          ],
        },
      },
    },
  });

  const profilePageIndex = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileDn.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileDn.id } },
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
layout: default
---

Developer Networks, bilişim sektöründe çalışan kimselerin belirli ortak noktalar etrafında birbirleri ile bir araya gelmelerini, sosyalleşmelerini ve network kurmalarını sağlamaya çalışan bir topluluktur.

Belirlenen her ortak nokta, bir alt-topluluk anlamına gelir ve kendine ait ait çeşitli iletişim kanalları ve etkinlikleri bulunur.

## Alt-Topluluklar

<Cards>
  <Card category="konum" title="DN İzmir" description="İzmir yerel geliştirici topluluğu." telegramUri="https://t.me/devizmir" />
  <Card category="konum" title="DN İstanbul" description="İstanbul yerel geliştirici topluluğu." />
  <Card category="profesyonel" title="DN JavaScript" description="JavaScript ve ilintili teknolojiler ile ilgili geliştirici topluluğu." telegramUri="https://t.me/jstanbulGroup" />
  <Card category="profesyonel" title="DN Açık Kaynak" description="Açık kaynak geliştirme ile ilgili geliştirici topluluğu." telegramUri="https://t.me/acikkaynak" />
  <Card category="hobi" title="DN Mekanik" description="Mekanik klavye ile ilgilenenler topluluğu." telegramUri="https://t.me/mechistanbul" />
  <Card category="hobi" title="DN Bilim Kurgu/Fantastik Sevenler" description="Bilim kurgu ve fantastik edebiyat eserleri ile ilgilenenler topluluğu." telegramUri="https://t.me/bilimkurguyazilim" />
  <Card category="hobi" title="DN Oyuncular" description="Video oyunlar ile ilgilenenler topluluğu." telegramUri="https://t.me/oyunyazilim" />
  <Card category="hobi" title="DN Kahve Demleyenler" description="Kahveler ile ilgilenenler topluluğu." telegramUri="https://t.me/kahveciyazilimcilar" />
  <Card category="hobi" title="DN İçki Tadanlar" description="Alkollü içkiler ile ilgilenenler topluluğu." telegramUri="https://t.me/ickiyazilim" />
  <Card category="hobi" title="DN Fotograf Çekenler" description="Fotoğrafçılık ile ilgilenenler topluluğu." telegramUri="https://t.me/fotoyazilim" />
</Cards>`,
            },
          ],
        },
      },
    },
  });

  const profilePageStories = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileDn.id, slug: "stories" } },
    update: {},
    create: {
      profile: { connect: { id: profileDn.id } },
      slug: "stories",
      order: 2,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Haberler",
              contentTx: `---
title: Haberler
date: 2022-08-21
layout: default
---
Bu sayfa henüz hazırlık aşamasında.`,
            },
          ],
        },
      },
    },
  });

  return {
    profileDn,
    profileLinkWebsite,
    profilePageIndex,
    profilePageStories,
  };
};

export { seedProfileDn };
