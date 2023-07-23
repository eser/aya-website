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
              descriptionTx: "Bilişim Meta-Topluluğu",
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

## Açık Yazılım Ağı Nedir?

Kişilerin, toplulukların, firmaların, resmi kurumların ve sivil toplum kuruluşlarının
iletişimini ve iş birliğini kolaylaştırmayı sağlayarak ekosistem oluşmasına öncülük eden
bir inisiyatifiz. Organizasyon yapımıza Meta-Topluluk ismini veriyoruz.

<Profile slug="aya/about">Hakkında</Profile> bölümünden daha detaylı bilgiye
ulaşabilirsiniz.


## Meta-Topluluk Nedir?

Diğer kişi, topluluk ve kurumları da çatısı altına alarak devamlılığını ve etkinliğini
destekleyici şekilde "şemsiye" görevi gören organizasyonlar meta-topluluk olarak
tanımlanabilir.


## Hedef Kitlesi Kimlerdir?

Bilişim sektörüne temas eden, Türkiye'deki ve Türkçe konuşan herkes odaklandığımız hedef
kitlesinin içinde yer alıyor.


## Amaçlarımız Nelerdir?

- Geliştirici ekosistemine etkinlik, proje ve içerik katkısı sağlamak,
- Geliştiricilerin bireysel gelişimlerini üretimlerini desteklemek, motivasyonlarını
  arttırmak,
- Geliştirici ekosistemindeki engelleri ortadan kaldırmak,
- Toplulukların oluşumuna ve devamlılığına katkı sağlamak,
- Toplulukların bilinirliliği ve faaliyet görünürlülüğünü arttırmak,
- Toplulukların birbirleri arasında iletişimlerinin ve geçişkenliklerinin artmasını
  sağlamak,
- Proje, paydaş ve toplulukları bir araya getirerek güç birliği yapılmasını sağlamak,
- Toplulukların sponsor, konuşmacı, yer v.b. lojistik eksikliklerini ortadan kaldırmak,
- Yeni kişi, kuruluş ve toplulukların ekosisteme dahiliyetlerini sağlamak,
- Aynı kitleye aynı faaliyetleri gösteren topluluklar yerine birbirlerini tamamlayan
  topluluklar oluşturmak,
- Yalnızca yeni başlayanların değil, her seviyede geliştiricinin topluluklara dahil
  olmasını ve istifade etmesini sağlamak,
- Hedeflenen mecralarda rutin periyodlarda içerik, proje ve etkinlik üretilmesini
  sağlamak,
- Herhangi bir sosyal sorumluluk gereksinimi anında bilgi sistemleri ve mühendislik
  pratiklerini uygulayarak, açık kaynaklı çözümlerle yaşadığımız topluma katkı
  sağlanması için öncü olmak,


## Nasıl Katılabiliriz?

<Profile slug="aya/policies">Kurallar</Profile> bölümünde prensip ve kriterlerimiz yer
almaktadır. Bunları karşıladığınız sürece kendinizi Açık Yazılım Ağı'nın bir parçası
olarak tanıtabilir ve hareket edebilirsiniz.`,
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

## Prensip ve Kriterlerimiz

*henüz hazır değil*


## Katkıcı Ahdi Topluluk Sözleşmesi

### Taahhüdümüz

Herkes için açık ve erişilebilir bir ortam sağlamak amacıyla üyeler, katkıda bulunanlar ve liderler olarak biz katkı vermeyi yaş, beden ölçüsü, görünür veya görünmez sakatlık, etnik köken, cinsiyet özellikleri, cinsiyet kimlik ve ifadesi, tecrübe seviyesi, eğitim, sosyo-ekonomik durum, milliyet, kişisel görünüm, ırk, din veya cinsel kimlik ve yönelim ayrımı gözetmeden keyifli ve güvenli bir tecrübe haline getirmeyi taahhüt ediyoruz.

Açık, misafirperver, çeşitliliği destekleyen, kapsayıcı ve sağlıklı bir topluluk oluşturacak şekilde hareket etmeyi ve etkileşim kurmayı taahhüt ediyoruz.

### Standartlarımız

Bizim için olumlu bir topluluk ortamına katkıda bulunan davranış örnekleri şunları içerir:

- Diğer insanlara karşı empati ve nezaket göstermek
- Farklı görüşlere, bakış açılarına ve deneyimlere saygılı olmak
- Yapıcı geri bildirim verme ve geri bildirimi zarifçe kabul etme
- Sorumluluğu kabul etmek ve hatalarımızdan etkilenenlerden özür dilemek, ve bu deneyimlerden öğrenme
- Sadece kendimiz için değil, topluluk için en iyi olana odaklanmak

Kabul edilemez davranış örnekleri şunları içerir:

- Cinselleştirilmiş dil veya imgelerin ve cinsel ilgi veya her türlü cinsel avantajın kullanımı
- Trolleme, hakaret veya aşağılayıcı yorumlar ve kişisel veya politik saldırılar
- Açıktan veya gizli taciz
- Açık izinleri olmadan fiziksel adresleri veya e-posta gibi başkalarının özel bilgilerini yayınlama
- Profesyonel bir ortamda makul sayılmayabilecek diğer davranışlar

### Uygulama Sorumlulukları

Topluluk liderleri, kabul edilebilir davranış standartlarımızı açıklamaktan ve uygulamaktan sorumludur ve uygunsuz, tehdit edici, saldırgan veya zararlı gördükleri davranışlara karşılık olarak uygun ve adil düzeltici önlemler alacaktır.

Topluluk liderleri, bu Davranış Kurallarına uymayan yorumları, commit'leri, kodları, wiki düzenlemelerini, sorun kayıtlarını ve diğer katkıları kaldırma, düzenleme veya reddetme hakkına ve sorumluluğuna sahiptir ve gerektiğinde denetleme kararlarının nedenlerini bildirir.

### Kapsam

Bu Davranış Kuralları tüm topluluk alanlarında geçerlidir ve ayrıca bir kişinin topluluğu kamuya açık alanlarda resmi olarak temsil ettiğinde de geçerlidir. Topluluğumuzu temsil etmenin örnekleri arasında resmi bir e-posta adresi kullanmak, resmi bir sosyal medya hesabı aracılığıyla yayınlamak veya çevrimiçi veya çevrimdışı bir etkinlikte atanmış bir temsilci olarak hareket etmek yer alır.

### Uygulama

Zorbalık, taciz edici veya başka bir şekilde kabul edilemez davranış örnekleri topluluk grupları üzerinden (discord, telegram v.b.) uygulamadan sorumlu topluluk liderlerine bildirilebilir. Tüm şikayetler derhal ve adil bir şekilde incelenecek ve araştırılacaktır.

Tüm topluluk liderleri, herhangi bir olayın şikayetçisinin gizliliğine ve güvenliğine saygı göstermekle yükümlüdür.

### Uygulama Yönergeleri

Topluluk liderleri, bu Davranış Kurallarını ihlal ettiklerini düşündükleri herhangi bir eylemin sonuçlarını belirlerken bu Topluluk Etki Kurallarını izleyeceklerdir:

#### 1. Düzeltme

**Topluluk Etkisi**: Toplulukta profesyonel olmayan veya hoş karşılanmadığı kabul edilen uygunsuz dil veya diğer davranışların kullanılması.

**Sonuç**: Topluluk liderlerinden kişiye ihlalin niteliği ve davranışın neden uygunsuz olduğuna dair açıklama sağlayan özel, yazılı bir uyarı gönderilir. Kişiden kamuya açık bir özür talep edilebilir.

#### 2. Uyarı

**Topluluk Etkisi**: Tek bir veya bir dizi olayda ihlal.

**Sonuç**: Davranış sürekliliği için sonuçları belirten bir uyarı. Belirli bir süre için Davranış Kurallarını uygulayanlarla istenmeyen etkileşim dahil, olaya dahil olan kişilerle etkileşim yasağı getirilir. Bu, sosyal medya gibi dış kanalların yanı sıra topluluk alanlarında etkileşimden uzaklaştırılmayı içerir. Bu şartları ihlal etmek geçici veya kalıcı bir yasaklamaya yol açabilir.

#### 3. Geçici Yasak

**Topluluk Etkisi**: Sürekli uygunsuz davranış da dahil olmak üzere, topluluk standartlarının ciddi bir ihlali.

**Sonuç**: Belirli bir süre boyunca toplulukla her türlü etkileşimden veya halkla iletişimden geçici olarak yasaklanma. Davranış Kurallarını uygulayanlarla istenmeyen etkileşim dahil, ilgili kişilerle hiçbir kamusal veya özel etkileşime izin verilmez. Bu şartları ihlal etmek kalıcı bir yasağa yol açabilir.

#### 4. Kalıcı Yasak

**Topluluk Etkisi**: Sürekli uygunsuz davranışlar, bir bireyin taciz edilmesi veya bireylerin sınıflarına karşı saldırganlık veya aşağılama dahil olmak üzere, topluluk standartlarının ihlalinde devamlılık göstermek.

**Sonuç**: Topluluk içindeki her türlü açık etkileşimden kalıcı bir yasak.

### Kaynak

Bu Davranış Kuralları [Katılımcı Sözleşmesinden] uyarlanmıştır, sürüm 2.0'a şu adresten ulaşılabilir: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Topluluk Etki Yönergeleri [Mozilla'nın davranış kuralları icra merdiveninden](https://github.com/mozilla/diversity) ilham alındı.

Bu davranış kuralları hakkında sık sorulan soruların yanıtları için https://www.contributor-covenant.org/faq adresindeki SSS bölümüne bakın. Çevirilere https://www.contributor-covenant.org/translations adresinden ulaşabilirsiniz.


[Katılımcı Sözleşmesinden]: https://www.contributor-covenant.org`,
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

Açık Yazılım Ağı, temelleri 2015'de <Profile slug="eser">Eser Özvataf</Profile> tarafından [github.com/acikkaynak](https://github.com/acikkaynak) adresinde atılmış ([ilk commit](https://github.com/eser/acikkaynak-arsiv/commit/183ddec51161b6a353c513bd42afa3b41abe6766)), bir açık kaynak topluluk inisiyatifidir.

Geçmişteki çalışmalarımız daha çok yazılım ekosistemine yönelik araç, topluluk ve siteler üretmek, bunların tanıtımını ve sürdürülebilirliğini sağlamak, açık kaynak bilinçlenmesini sağlamak için içerik üretiminde bulunmak olmuş olsa da; bize belirgin bir öğrenim ve deneyim kazandırmış, sonraki çalışmalarımıza ışık tutmuştur.

Türkiye'de Sanayi Bakanlığı girişimleri ile oluşturulan Türkiye Açık Kaynak Platformu'nun topluluklar tarafında da destekler vererek, üniversiteler ve firmalar ile bir araya gelmiş; Türkiye'deki açık kaynak ekosisteminin tüm paydaşları ile zemin etüdünü yapma fırsatı bulmuştur. Bu süreç içerisinde “açık kaynak rehberi oluşturma”, “kurumlar içi açık kaynak”, “açık kaynak vakfı oluşturma” konuları üzerine çalışmalarda bulunarak belirli bir literatür oluşturulmasına katkıda bulunmuştur.

Şubat 2023'de Kahramanmaraş'ta gerçekleşen ve 10 ili etkileyen deprem felaketi sonrasında ise “yazılımcılara ekosistemine yönelik araç, topluluk ve siteler üretimi” çalışmalarımızın kapsamı ve kitlesi <Profile slug="afet.org" /> projemiz ile birlikte genişlemiş, birçok kişi, topluluk ve kurumun katkılarına çatı oluşturması ile birlikte bugünkü bilişim meta-topluluğu kimliğine kavuşmuştur. Detaylar için [Açık Yazılım Ağı blog yazısını](https://eser.dev/acik-yazilim-agi) okuyabilirsiniz.

Bugün 24,000'i aşkın bilişim sektörü ilgisine temas eden bir meta-topluluk olarak; sosyal yönü ağır basan konularda bilgi sistemleri, mühendislik ve açık kaynak pratiklerinin bize verdiği bakış açılarını da uygulayarak, içinde bulunduğumuz ekosistem ve topluma katkı sağlamak için çalışmalarımızı sürdürüyoruz.`,
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
