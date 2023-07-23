import { type PrismaClientType } from "../client.ts";

const seedProfileGonulluIo = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileGonulluIo = await prisma.profile.upsert({
    where: { slug: "gonullu.io" },
    update: {},
    create: {
      type: "Product",
      slug: "gonullu.io",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/gonulluio.png",

      showStories: true,
      showMembers: true,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "gonullu.io",
              descriptionTx: "Açık Kaynak Gönüllü Yönetim Çözümleri",
            },
          ],
        },
      },
    },
  });

  const profileLinkWebsite = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileGonulluIo.id, slug: "website" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileGonulluIo.id } },
      slug: "website",
      uri: "https://gonullu.io",
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
    where: { profileId_slug: { profileId: profileGonulluIo.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileGonulluIo.id } },
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

**gonullu.io** projesi olarak sivil toplum gönüllülüğü gereken anlarda kullanılmak üzere resmi kurumların ve sivil toplum kuruluşların erişimi için açık kaynaklı çözümler geliştiriyoruz.


## Kısa Geçmiş

<Profile slug="afet.org" /> projemizde edindiğimiz tecrübeleri ve teknolojileri kullanarak, genel seçimlerde gönüllü gözlemci organizasyonu konusunda sivil toplum kuruluşlarına altyapı sağladık.


## Amacımız

Açık kaynak olarak geliştirmiş olduğumuz çözümleri GPDR/KVKK vb. yasal kısıtlamalara karşın en verimli çalışacak şekilde, dünyanın herhangi bir noktasında herhangi bir gönüllü organizasyonunda kullanılabilir bir ürün haline getirmek.


## Repositorylerimiz

- [acikkaynak/musahit-harita-frontend](https://github.com/acikkaynak/musahit-harita-frontend)
- [acikkaynak/musahit-harita-backend](https://github.com/acikkaynak/musahit-harita-backend)`,
            },
          ],
        },
      },
    },
  });

  return {
    profileGonulluIo,
    profileLinkWebsite,
    profilePageIndex,
  };
};

export { seedProfileGonulluIo };
