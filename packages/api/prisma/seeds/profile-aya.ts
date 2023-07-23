import { type PrismaClientType } from "../client.ts";

const seedProfileAya = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileAya = await prisma.profile.upsert({
    where: { slug: "aya" },
    update: {},
    create: {
      type: "Organization",
      slug: "aya",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/aya.png",

        showStories: true,
        showMembers: true,

        languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Açık Yazılım Ağı",
              descriptionTx: "acikyazilimagi.com",
            },
          ],
        },
      },
    },
  });

  const profileLinkWebsite = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileAya.id, slug: "website" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileAya.id } },
      slug: "website",
      uri: "https://acikyazilimagi.com",
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
    where: { profileId_slug: { profileId: profileAya.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileAya.id } },
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

Bu sayfa henüz hazırlık aşamasında.`,
            },
          ],
        },
      },
    },
  });

  const profilePageGuide = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileAya.id, slug: "guide" } },
    update: {},
    create: {
      profile: { connect: { id: profileAya.id } },
      slug: "guide",
      order: 2,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Rehber",
              contentTx: `---
title: Rehber
date: 2022-08-21
layout: default
---

## Açık Kaynak Yazılım

- [Açık Kaynak Yazılım Nedir?](.)
- [Özgür Yazılım ve Açık Kaynak arasındaki farklar](.)
- [Lisanslar](.)

## Açık Kaynak Geliştirme

- [Sürüm Kontrol Sistemleri](.)
- [GitHub Platformu](.)

## Katılım

- [Açık Kaynak projelerde katılım tanımlaması](.)
- [Nasıl katılım sağlarım?](.)
- [GitHub üzerinden katılım sağlamak](.)

## Organizasyon

- [Açık Kaynak projeme katılımcı nasıl bulabilirim?](.)
- [Katılım fıkrım var ama ingilizce eksiğim var](.)
- [Katılım fikrim var ama teknik eksiğim var](.)
- [Katılım fikrim var ama fikir danışmaya ihtiyacım var](.)`,
            },
          ],
        },
      },
    },
  });

  const profilePagePolicies = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileAya.id, slug: "policies" } },
    update: {},
    create: {
      profile: { connect: { id: profileAya.id } },
      slug: "policies",
      order: 3,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Kurallar",
              contentTx: `---
title: Kurallar
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

  const profilePageAbout = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileAya.id, slug: "about" } },
    update: {},
    create: {
      profile: { connect: { id: profileAya.id } },
      slug: "about",
      order: 4,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Hakkında",
              contentTx: `---
title: Hakkında
date: 2022-08-21
layout: default
---

Açık Yazılım Ağı, temelleri 2015'de <Profile slug="eser">Eser Özvataf</Profile> tarafından [github.com/acikkaynak](https://github.com/acikkaynak) adresinde atılmış ([ilk commit](https://github.com/eser/acikkaynak-arsiv/commit/183ddec51161b6a353c513bd42afa3b41abe6766)), internet üzerinden örgütlenen bir açık kaynak topluluğu organizasyonudur.

Geçmişteki çalışmalarımız daha çok yazılım ekosistemine yönelik araç, topluluk ve siteler üretmek, bunların tanıtımını ve sürdürülebilirliğini sağlamak, açık kaynak bilinçlenmesini sağlamak için içerik üretiminde bulunmak olmuş olsa da; bize belirgin bir öğrenim ve deneyim kazandırmış, sonraki çalışmalarımıza ışık tutmuştur.

Türkiye'de Sanayi Bakanlığı girişimleri ile oluşturulan Türkiye Açık Kaynak Platformu'nun topluluklar tarafında da destekler vererek, üniversiteler ve firmalar ile bir araya gelmiş; Türkiye'deki açık kaynak ekosisteminin tüm paydaşları ile zemin etüdünü yapma fırsatı bulmuştur. Bu süreç içerisinde “açık kaynak rehberi oluşturma”, “kurumlar içi açık kaynak”, “açık kaynak vakfı oluşturma” konuları üzerine çalışmalarda bulunarak belirli bir literatür oluşturulmasına katkıda bulunmuştur.

Şubat 2023'de Kahramanmaraş'ta gerçekleşen ve 10 ili etkileyen deprem felaketi sonrasında ise “yazılımcılara ekosistemine yönelik araç, topluluk ve siteler üretimi” çalışmalarımızın kapsamı ve kitlesi <Profile slug="afet.org" /> projemiz ile birlikte genişlemiş ve bugünkü organizasyon kimliğine kavuşmuştur.

Bugün discord sunucumuzda 24,000'i aşkın gönüllü bilişim sektörü çalışanı olarak; herhangi bir sosyal sorumluluk gereksinimi anında bilgi sistemleri ve mühendislik pratiklerini uygulayarak, açık kaynaklı çözümlerle yaşadığımız topluma katkı sağlamak için çalışıyoruz.`,
            },
          ],
        },
      },
    },
  });

  return {
    profileAya,
    profileLinkWebsite,
    profilePageIndex,
    profilePageGuide,
    profilePageAbout,
    profilePagePolicies,
  };
};

export { seedProfileAya };
