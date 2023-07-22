import { type PrismaClientType } from "../client.ts";

const seedProfileAfetOrg = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileAfetOrg = await prisma.profile.upsert({
    where: { slug: "afet.org" },
    update: {},
    create: {
      type: "Product",
      slug: "afet.org",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/afetorg.png",

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "afet.org",
              descriptionTx: "Açık Kaynak Afet Yönetim Çözümleri",
            },
          ],
        },
      },
    },
  });

  const profileLinkWebsite = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileAfetOrg.id, slug: "website" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileAfetOrg.id } },
      slug: "website",
      uri: "https://afet.org",
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
    where: { profileId_slug: { profileId: profileAfetOrg.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileAfetOrg.id } },
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

Afet anında, öncesinde ve sonrasında kullanılmak üzere bağımsız gönüllüler ile açık kaynak olarak geliştirilen teknolojiler resmi kurumların ve sivil toplum kuruluşların erişimi için afet.org'da.

## Projelerimiz

- [acikkaynak/acikkaynak-website](https://github.com/acikkaynak/acikkaynak-website)
- [acikkaynak/deprem-yardim-data](https://github.com/acikkaynak/deprem-yardim-data)
- [acikkaynak/deprem-yardim-frontend](https://github.com/acikkaynak/deprem-yardim-frontend)
- [acikkaynak/deprem-yardim-backend-go](https://github.com/acikkaynak/deprem-yardim-backend-go)
- [acikkaynak/deprem-yardim-whatsapp](https://github.com/acikkaynak/deprem-yardim-whatsapp)
- [acikkaynak/ben-iyiyim-frontend](https://github.com/acikkaynak/ben-iyiyim-frontend)
- [acikkaynak/deprem-yardim-projesi](https://github.com/acikkaynak/deprem-yardim-projesi)
- [acikkaynak/afet-yardim-twitter-bot](https://github.com/acikkaynak/afet-yardim-twitter-bot)
- [acikkaynak/yardim-agi-firebase](https://github.com/acikkaynak/yardim-agi-firebase)
- [acikkaynak/yardim-agi-flutter](https://github.com/acikkaynak/yardim-agi-flutter)
- [acikkaynak/deprem-yardimi](https://github.com/acikkaynak/deprem-yardimi)
- [acikkaynak/afet-yardim-telegram-bot](https://github.com/acikkaynak/afet-yardim-telegram-bot)
- [acikkaynak/afet-yardim-twitch-bot](https://github.com/acikkaynak/afet-yardim-twitch-bot)
- [acikkaynak/deprem-yardim-cloud-infra](https://github.com/acikkaynak/deprem-yardim-cloud-infra)
- [acikkaynak/kayip-cocuk-frontend](https://github.com/acikkaynak/kayip-cocuk-frontend)
- [acikkaynak/kayip-cocuk-backend](https://github.com/acikkaynak/kayip-cocuk-backend)
- [acikkaynak/deprem-yardim-map-iframe](https://github.com/acikkaynak/deprem-yardim-map-iframe)
- [acikkaynak/deprem-io-frontend](https://github.com/acikkaynak/deprem-io-frontend)
- [acikkaynak/deprem-io-backend](https://github.com/acikkaynak/deprem-io-backend)
- [acikkaynak/deprem-yardim-links](https://github.com/acikkaynak/deprem-yardim-links)
- [acikkaynak/depremadres-intent-classification-v0](https://github.com/acikkaynak/depremadres-intent-classification-v0)
- [acikkaynak/depremadres-reverse-geocoder](https://github.com/acikkaynak/depremadres-reverse-geocoder)
- [acikkaynak/discord-it-yardim-bot](https://github.com/acikkaynak/discord-it-yardim-bot)
- [acikkaynak/YardimAGI](https://github.com/acikkaynak/YardimAGI)
- [acikkaynak/ben-iyiyim](https://github.com/acikkaynak/ben-iyiyim)
- [acikkaynak/deprem-io](https://github.com/acikkaynak/deprem-io)
- [acikkaynak/afet-yardim-discord-bot](https://github.com/acikkaynak/afet-yardim-discord-bot)
- [acikkaynak/deprem-yardim-address-api](https://github.com/acikkaynak/deprem-yardim-address-api)
- [acikkaynak/eczane-frontend](https://github.com/acikkaynak/eczane-frontend)
- [acikkaynak/eczane-backend](https://github.com/acikkaynak/eczane-backend)
- [acikkaynak/eczane-admin-frontend](https://github.com/acikkaynak/eczane-admin-frontend)`,
            },
          ],
        },
      },
    },
  });

  return {
    profileAfetOrg,
    profileLinkWebsite,
    profilePageIndex,
  };
};

export { seedProfileAfetOrg };
