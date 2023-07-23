import { type PrismaClientType } from "../client.ts";

const seedProfileEser = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileEser = await prisma.profile.upsert({
    where: { slug: "eser" },
    update: {},
    create: {
      type: "Individual",
      slug: "eser",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/eser.png",

        showStories: true,
        showMembers: false,

        languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Eser Ozvataf",
              descriptionTx: "founder of acik yazilim • streamer • generalist",
            },
          ],
        },
      },
    },
  });

  const profileLinkTwitter = await prisma.profileLink.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "twitter" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "twitter",
      uri: "https://twitter.com/eser",
      iconSet: "lucide",
      iconKey: "twitter",
      order: 1,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Twitter",
              descriptionTx: "Twitter profilim",
            },
          ],
        },
      },
    },
  });

  const profileLinkGitHub = await prisma.profileLink.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "github" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "github",
      uri: "https://github.com/eser",
      iconSet: "lucide",
      iconKey: "github",
      order: 2,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "GitHub",
              descriptionTx: "GitHub profilim",
            },
          ],
        },
      },
    },
  });

  const profilePageIndex = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "index",
      order: 1,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Frontpage",
              contentTx: `---
title: Frontpage
date: 2022-08-21
---

As a **technical generalist** who believes my organizational skills, abstraction and out-of-the-box-thinking are my strengths, I have taken various professional roles in the IT field **since 2001**.

I have started my career as a **Developer** and continued with many duties as **Software Architect**, **Delivery Manager**, **Engineering Manager**, **DevRel** and **Director**. Over the years, I have gained experience in leading value delivery of multiple product groups no matter how they are specialized, located and distributed.

Currently, I am working at [Teknasyon](https://teknasyon.com/) as **Head of Engineering**.


## Content Creation and Speaking
--------------------------------

I stream about software development on [https://eser.live](https://eser.live).

As a highly contributing GitHub user, I try to contibute and create new open source projects (had approximately 120 repositories last time I checked).

As long as I get invited, I attend conferences and meetups as a speaker. Presentations of my speeches can be found at SpeakerDeck.

I write articles for my personal blog on Medium and for açık-kaynak.org which is a open-source related newsletter. Also I share my personal opinions and experiences on Twitter.


## Tech Stacks I Expertised
---------------------------

### Programming Languages
JavaScript, Python, PHP, C#, Java, C++, C, Pascal, Basic

### Application and Virtualization Platforms
Kubernetes, Docker, AWS Lambda, AWS ECS, AWS Elasticbeanstalk, Azure AppServices, Azure AKS, GCP GKE Autopilot

### Cloud Providers
Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)

### Runtimes
.NET, JVM, Node.js, Deno

### Databases
Postgres, MySQL, MariaDB, Mongodb, SQL Server, Oracle

### Frontend Tools, Libraries and Frameworks
React, Next.js, jQuery, Knockout.js, Backbone, React Hooks, Redux, Apollo, webpack

### Backend Tools, Libraries and Frameworks
Serverless Framework, Express, Django, Graphene GraphQL

### DevOps Tools, Libraries and Frameworks
Istio, Linkerd, Prometheus, Grafana, Helm, Terraform


## Soft and Seniorship Skills
-----------------------------

### Architectural Concepts
Functions as a Service (FaaS), Serverless, Microservices, Domain Driven Design (DDD)

### Cultural Adoptations
Agile, Kaizen, DevOps, Data-Driven Decision-Making (DDDM), Cross-Functional Product Teams

### Planning
User Story Mapping, Release Roadmaps

### Project Management Frameworks
SCRUM, Kanban`,
            },
          ],
        },
      },
    },
  });

  const profilePageCv = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "cv" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "cv",
      order: 2,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Curriculum Vitae",
              contentTx: `---
title: Curriculum Vitae
date: 2022-08-21
---

## Experience
-------------

### Head of Engineering, Teknasyon

May 2023 - Present


### CTO, Datapad

Oct 2022 - May 2023

Datapad is a tech startup is to enable a data-driven culture for teams of all sizes. They're on the road to build the world’s easiest data solution. Raised $1m in pre-seed, backed by 500 Startups.


### Engineering Director, Founding DevRel, Getir

Dec 2021 - Oct 2022

Getir is a decacorn tech startup that delivers ultra-fast groceries.

Achievements:
- The first DevRel of the company, being the founder of the discipline
- Led the "Agile Office", organizational agility professionals team of agile coaches and scrum masters
- Completed 3 bootcamps, along with 14 new recruitments
- Attended some external events
- Celebrated May the 4th: Star Wars Day
- Started technical event series named Getir Tech Talks
- Worked on improvements to hiring processes
- Worked on improvements to onboarding processes
- Crafted an observation-based career framework for the entire technology department
- Introduced an internal mobility policy for those who have long tenure
- Crafted a maturity matrix to state common goals for squads in perspective of tech-data-product concerns
- Held over 100 face-to-face interviews to collect insights


### Director, Açık Yazılım

Nov 2020 - Dec 2021

Açık Yazılım is founded by myself during the COVID-19 pandemic. As a software consulting company, it outsources know-how and workforce for its customers contracted with.

Achievements:
- Founded the company and contracted with customers
- Delivered and maintained a contracted work which is a marketplace specialized in holistic wellbeing services
- Provided consultancy to a well-known Turkish Unicorn during their transition to product-based agile teams

Technologies, Platforms, and Concepts experienced during the period:
- JavaScript, Python
- Amazon Web Services, Google Cloud Provider, Cloudflare, Cloudflare Pages, GitHub Actions
- Kubernetes, Docker
- Node.js, Deno, Cypress, Jest, webpack
- React, React Hooks, GraphQL, Django


### Coordinator of Projects, Turkish Open Source Platform

Dec 2020 - May 2021

An establishment under the auspices of the Ministry of Industry and Technology of the Turkish state, Turkey Open Source Platform aims to increase the number of software developers Turkey needs, to increase the qualifications of existing software developers, and to develop the open-source ecosystem. In this respect, the platform performs a similar function to CNCF (CloudNative Foundation) and Linux Foundation.

Achievements:
- Established and facilitated weekly meetings of project groups under five different project topics in order to produce the software needed by the public and private sectors in Turkey with open source software (These topics were Natural Language Processing, Cloud and Database Systems, Mobility, Linux (Pardus) and Digital Badges.)
- Formed collaborations between platform stakeholders
- Planned and kicked off online a webinar series and two hackathons
- Designed an architecture and developed project analysis of a digital badge and verification project
- Assisted and reviewed technical output related with projects


### Software Manager, Setur

Sep 2018 - Nov 2020

Setur is the tourism and duty-free merchandising company of Koç Holding Group of Companies, which is on the Fortune 500 list.

Achievements:
- Accomplished the leadership and coaching of Agile & DevOps transformation which led the company to have 80% accurate estimations
- Led 9 cross-functional product teams, with a total of 30+ people with various functions (UX, QA, SE, BA, etc.)
- Designed company-wide prioritization flow to maintain both product and technical roadmaps of products
- Achieved faster onboarding process and development of culture by initiating a knowledge base that consists of both cultural and technical guidelines
- Achieved faster troubleshooting and bug detection by established software quality assurance and delivery metrics with monitoring, tracing, and alerting mechanisms
- Transformed Windows & .NET only ecosystem into polyglot-enabled, Linux-containerized, orchestrated and multi-regional infrastructure runs on Kubernetes
- Improved IT recruitment processes, implemented technical assessments, attended 300+ recruitment meetings
- Enabled remote and multi-regional development culture
- Organized a meetup and several training sessions

Technologies, Platforms, and Concepts experienced during the period:
- JavaScript, .NET, Java
- Microsoft Azure, Azure DevOps
- Linux, Windows, macOS
- Kubernetes, Docker
- Postgres, SQL Server, MongoDB, ElasticSearch
- Node.js, Cypress, Jest, webpack, Kibana, Grafana
- React, React Native
- Microservices, DDD
- CloudNative, OpenSource


### Lead Software Developer, KoçSistem

May 2016 - Sep 2018

KoçSistem is the information technology company of Koç Holding Group of Companies, which is on the Fortune 500 list. They offers a wide range of products and services in areas such as Internet of Things, Big Data & Analytics, Security, Corporate Cloud, Corporate Mobility, Business Solutions, Digital Workforce and RPA.

Achievements:
- Kicked off the company's main application framework and was the first member of the company's DevOps and Software Architecture teams
- Developed a React project for initializing codebases that use the company's main application framework with selected components on a web wizard form
- Helped other teams to embrace Agile and DevOps practices
- Took parts of analysis and decisions of company's product choices (such as CMSes, orchestration tools, etc)
- Delivered the company's first serverless project that runs on AWS Lambda
- Delivered and maintained 3 enterprise solutions to customers
- Attended recruitment meetings as a technical interviewer

Technologies, Platforms, and Concepts experienced during the period:
- JavaScript, .NET
- Amazon Web Services
- Jenkins, JMeter, Docker
- SQL Server, Oracle, MongoDB, ElasticSearch
- Node.js, AWS Lambda, AWS Cognito, AWS S3
- React, Redux
- FaaS, DDD


### Software Architect, Mobilex

Sep 2015 - Apr 2016

MobileX is a fast-growing tech company focused on building and marketing highly scalable mobile applications. Despite being such a young company, they have a track record of building & growing mobile apps on various verticals that reached over 120 million users across 160 countries.

Achievements:
- Developed a complete backend and cloud architecture for Instagram-like application with location-awareness

Technologies, Platforms, and Concepts experienced during the period:
- JavaScript
- Amazon Web Services
- Terraform, Docker
- Postgres, MongoDB
- Node.js, AWS VPC, AWS EC2, AWS ElasticBeanstalk, AWS S3
- OpenStreetMaps


### E-Commerce Software Consultant, Zaimoglu Holding

Sep 2014 - Aug 2015


### Social Media Oriented Web Development and Research Assistant, Eastern Mediterranean University

Sep 2013 - Sep 2014


### Team Lead, Goldsoft Trading

Jun 2012 - Aug 2013


### Head of Software Development, CMFNet

Jun 2008 - May 2012


### Software Design Engineer, DevBiz

Apr 2006 - Jan 2007


### Backend Developer and System Administrator, Ispro

Mar 2005 - Apr 2006


### Web Developer, Egebilgi

Jun 2004 - Feb 2005


### Web Developer, Sis Hosting

Jan 2001 - Aug 2002



## Education
------------

### Master's Degree - Information and Communication Technologies in Education

2013 - 2019

Eastern Mediterranean University, CGPA: 3.44 / 4.00


### Bachelor of Science - Information Technology

2010 - 2012

Eastern Mediterranean University, CGPA: 3.12 / 4.00


### Associate's Degree - Computer Programming

2002 - 2004

Celal Bayar University, CGPA: 78.77/100



## Certificates and Exams
-------------------------

### LEAD Execution Program - Personal Branding, Reputation and Perception Management Training for Leaders

Sep 2019

Issuer: Koç Holding HR - Koç University


### LEAD Execution Program - Customer Experience

Sep 2019

Issuer: Koç Holding HR - Koç University


### Assessment Center

Aug 2019

Issuer: TAG


### Applied Entrepreneurship Training

Apr 2016

Issuer: KOSGEB


### edx CS-169.1x: Software as a Service

Aug 2013

Issuer: Berkeley (University of California)

[https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c](https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c)


### edx 6.00x: Introduction to Computer Science and Programming

Jun 2013

Issuer: The Massachusetts Institute of Technology

[https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba](https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba)


### Academic Personnel and Graduate Education Exam

May 2012

Issuer: OSYM


### General English (EFL) - Upper-Intermediate (Council of Europe B2)

Jun 2011

Issuer: UKLA


### Project Management Methodologies and Practices

Jun 2011

Issuer: Turkcell Akademi


### MCTS - Microsoft Windows Mobile Application Development

May 2010

Issuer: Microsoft


### MCTS - Microsoft Windows Mobile Designing, Implementing and Managing

May 2010

Issuer: Microsoft`,
            },
          ],
        },
      },
    },
  });

  const profilePagePortfolio = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "portfolio" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "portfolio",
      order: 3,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Portfolio",
              contentTx: `---
title: Portfolio
date: 2022-08-21
---

## Content and Projects
-----------------------

- [YouTube Streams and Videos](https://youtube.com/EserOzvataf) (youtube.com/EserOzvataf)
- [GitHub Profile](https://github.com/eserozvataf) (github.com/eserozvataf)


## Organizer Of
---------------

- [açık-kaynak.org](https://acik-kaynak.org) (acik-kaynak.org)
- [JSTANBUL](https://kommunity.com/jstanbul) (jstanbul.org)
- [Dev İzmir](https://devizmir.com/) (devizmir.com)


## Open Source Projects I Started
---------------------------------

[hex](https://github.com/eserozvataf/hex),
[hex-service](https://github.com/eserozvataf/hex-service),
[fetchp](https://github.com/eserozvataf/fetchp),
[darty](https://github.com/eserozvataf/darty),
[Tassle](https://github.com/eserozvataf/tassle),
[laroux.js](https://github.com/eserozvataf/laroux.js),
[sey](https://github.com/eserozvataf/sey),
[apibone](https://github.com/eserozvataf/apibone),
[Scabbia2 PHP Components](https://github.com/eserozvataf/scabbia2),
[PM Tool](https://github.com/eserozvataf/pm),
[Survey Tool](https://github.com/eserozvataf/survey),
[Quake 3 Now](https://github.com/eserozvataf/q3now)
and [Others](https://github.com/eserozvataf)...


## Projects I Worked On
-----------------------

2021

- Marketplace specialized on holistic wellbeing services - *Açık Yazılım*

2020

- Blogging Platform for Influencers and Travelers - *Setur*
- B2B Holiday and Hotel Booking Mobile Application - *Setur*
- B2B Holiday and Hotel Booking Site - *Setur*
- B2C Holiday and Hotel Booking Mobile Application - *Setur*

2019

- B2C Holiday and Hotel Booking Site - *Setur*
- B2E Holiday and Hotel Booking Site - *Setur*
- Promotion Service for Hotel, Tour and Cruise Shopping - *Setur*

2018

- Enterprise-grade Application Framework - *KoçSistem*

2017

- Consultant Relationship System runs on Serverless AWS service - *KoçSistem*
- Enterprise .NET Core Project on Employee Tracking - *KoçSistem*

2016

- Enterprise .NET Project on Door, Region Access Management - *KoçSistem*
- Olev, Local Uber Clone - *Freelance*
- Thatsup Social Media Initiative - *Freelance*

2015

- Alanadları.com Digital Domain Market - *Freelance*
- Servisvar.com Automobile Service and Rental Platform - *Freelance*
- Magma.com.tr Online Shopping Store - *Zaimoğlu Holding*
- Luksbazaar.com Online Shopping Store - *Zaimoğlu Holding*
- Xml Synchronization Application for Magento - *Zaimoğlu Holding*

2014

- EasyWords Word Memorization Application - *Freelance*
- Hayırlısı.net Online Shopping Store - *Freelance*
- Sosyalim Location-based Messaging - *Freelance*
- OrnekHolidays.com Holiday and Hotel Booking Site - *Freelance*
- Doğu Akdeniz Üniversitesi Photograph Contest - *DAÜ Sosyal Medya*
- Üstün Zekalılar Enstitüsü Online Examination System - *Freelance*
- Beylerbeyi Emlak Online Real Estate Site - *Freelance*
- Hasan Sungur Group of Companies Portfolio Site - *Freelance*
- Tetris for Windows Mobile
- 10+2 Windows Mobile Productivity Application

2013

- Interesd Social Aggregator Social Media Initiative - *Goldsoft*
- Kibrissiparis.com Local Market and Food Delivery Site - *Goldsoft*

2008-2012

- CMFCell AtlasJet Inhouse SMS Messaging Service - *CMFNet*
- CMFCell Yaşar Holding DYO Royalty System - *CMFNet*
- CMFCell UA (Ukraine) SMS Gateway Messaging Service - *CMFNet*
- CMFCell Message Gateway Messaging Service - *CMFNet*
- Turkcell Outlook Mobile Service Messaging Service - *CMFNet*
- Life (GSM Carrier in Ukraine) Scratch Card System - *CMFNet*
- CMFCell Excel Add-In - *CMFNet*
- CMFCell Outlook and Active Directory Add-In - *CMFNet*
- CMFCell Desktop Addressbook ve Messaging Software - *CMFNet*

2006

- devMX/devDns/devGroupware .NET Components - *devBiz*
- devMail .NET Component - *devBiz*

2005

- ISPRO.net Web Hosting Panel - *ISPRO*
- Oruçoğlu Termal Hotel Online Appointment System - *ISPRO*
- Egem Online Automobile Service Appointment System - *ISPRO*

2004

- Egebilgi.net SME Portal - *Egebilgi*
- do-re Online Shopping Store - *Egebilgi*
- Sir Winston Tea Web Site - *Egebilgi*
- Boomerang Content Management System - *Egebilgi*

Pre-2004

- Sis Web Hosting Automation - *Sis*
- Gozcard/Göztepe Sport Club Online Shopping Store - *Sis*
- Otolab Online Automobile Service Appointment System - *Freelance*
- Sistech.com Technology/Software News Portal - *Sis*
- Turkishqf.org Gaming News Portal`,
            },
          ],
        },
      },
    },
  });

  const profilePageSpeaking = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "speaking" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "speaking",
      order: 4,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Speaking",
              contentTx: `---
title: Speaking
date: 2022-08-21
---

## Conference and Meetups
-------------------------

### JSTANBUL 2021 - 12 Jun 2021
[Deno, While Celebrating Its 2. Birthday](https://speakerdeck.com/eser/2-yasina-girerken-deno) (in Turkish)

### Geekday 2021 - 4 Apr 2021
[How Software Teams and Firms Get Organized Today?](https://speakerdeck.com/eser/gunumuzde-yazilim-ekipleri-ve-firmalari-nasil-organize-oluyor) (in Turkish)

### ACM Hacettepe ACS Days - 30 Jun 2020
[Yesterdays and Todays of Backend Development with Node.js, Deno and JavaScript](https://speakerdeck.com/eser/node-dot-js-deno-ve-javascript-ile-backend-gelistirmenin-dunu-ve-bugunu) (in Turkish)

### AçıkSeminer - 14 Apr 2020
[Open Source 101](https://speakerdeck.com/eser/acik-kaynak-101-acikseminer) (in Turkish)

### GDG DevFest İzmir - 23 Nov 2019
[Functions() for Beginners, Functions() for Starting Over Once More](https://speakerdeck.com/eser/yeni-baslayanlar-icin-fonksiyonlar-yeniden-baslamak-icin-fonksiyonlar) (in Turkish)

### Teknolot - 23 Oct 2019
[GitHub Actions](https://speakerdeck.com/eser/github-actions) (in Turkish)

### .NET Conf 2019 - 28 Sep 2019
[Open Source Journey of .NET Ecosystem](https://speakerdeck.com/eser/dot-net-ekosisteminin-acik-kaynak-yolculugu-ve-bugunu) (in Turkish)

### Build 2019 - 18 Jun 2019
[React Native for Windows](https://speakerdeck.com/eser/react-native-for-windows) (in Turkish)

### PHPKonf İstanbul - 04 May 2019
[Serverless PHP](https://speakerdeck.com/eser/serverless-php) (in Turkish)

### PHPKonf İzmir - 09 Mar 2019
[End-to-end PHP Projects for Azure DevOps and GitHub](https://speakerdeck.com/eser/azure-devops-ve-github-ile-uctan-uca-php-projeleri) (in Turkish)

### dotnetKonf - 03 Nov 2018
[Designing More Portable, More Independent .NET Applications](https://speakerdeck.com/eser/daha-tasinabilir-daha-bagimsiz-net-uygulamalari-tasarlamak) (in Turkish)

### Hacktoberfest - 26 Oct 2018
[Open Source](https://speakerdeck.com/eser/acik-kaynak) (in Turkish)

### WebEnd Açık Kaynak - 26 May 2018
[Open Source Practices](https://speakerdeck.com/eser/acik-kaynak-pratikleri) (in Turkish)

### FrontEnd İstanbul - 29 Mar 2018
[TypeScript](https://speakerdeck.com/eser/typescript) (in Turkish)

### Developer Summit İzmir - 17 Mar 2018
[Rise of The Functions in Application Architecture](https://speakerdeck.com/eser/uygulama-mimarisinde-fonksiyonlarin-yukselisi) (in Turkish)

### Jstanbul - 18 Nov 2017
[Application Development in Serverless Architecture with Node.js](https://speakerdeck.com/eser/node-dot-js-ile-serverless-mimaride-gelistirme-yapmak) (in Turkish)

### WebEnd 2017 - 21 Oct 2017
[Which Requirements Drives Us to Serverless](https://speakerdeck.com/eser/hangi-ihtiyaclarla-serverlessa-yoneldik) (in Turkish)`,
            },
          ],
        },
      },
    },
  });

  const profilePageAbout = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileEser.id, slug: "about" } },
    update: {},
    create: {
      profile: { connect: { id: profileEser.id } },
      slug: "about",
      order: 5,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "About",
              contentTx: `---
title: About
date: 2022-08-21
---

## Hakkımda
-----------

İsmim Eser Özvataf, mühendislik yönetimi, kültürel dönüşüm, organizasyon
çevikliği, çevik liderlik, ürün odaklı geliştirme, çözüm mimarisi, IT süreç
yönetimi ve DevOps eksenli konularla ilgilenmekteyim.

Yazılım geliştirme yolculuğuma programcı titriyle başladım. Geride bıraktığım 18
yılda birçok geçiş dönemi yaşadım ve deneyimler biriktirdim. Setur'da Yazılım
Yöneticisi olarak çalışmamın yanısıra, çeşitli platformlarda yazılım sektörü ve
yazılım geliştirme ekseninde içerik üretiyor ve konuşmalar yapıyorum. Yine
topluluklar arasında aktif olarak yer almaya, yardımlaşmak ve organizasyon
liderliği üstlenmek sosyal çalışmalarım arasında. Bunlara örnek vermek
gerekirse;

- [Twitch](https://www.twitch.tv/laroux) üzerinden yazılımla ilgili yayınlar
  hazırlıyorum, yayınlar aynı zamanda [YouTube](https://youtube.com/EserOzvataf)
  ve [Periscope](https://twitter.com/eserozvataf)'da yayınlanıyorlar.
- [GitHub üzerinde](https://github.com/eserozvataf) açık kaynaklı projeler
  oluşturmaya (160'a yakın kendi repository'm vardı en son) veya mevcut
  projelere katkıda bulunmaya çalışıyorum.
- [açık-kaynak.org](https://acik-kaynak.org)'un içerik/altyapı bakımı ve
  topluluk liderliği ile ilgileniyorum.
- Davet geldiği sürece yurtiçi konferanslarda konuşmacı olarak yer alıyorum. Bu
  konuşmalara ait sunumları [SpeakerDeck](https://speakerdeck.com/eser)'e
  yüklüyorum.
- Ayrıca [Medium](https://medium.com/@eserozvataf) üzerinde uzun uzun blog
  yazıları ile, [Twitter](https://twitter.com/eserozvataf) üzerinde ise
  tweetlerle görüşlerimi paylaşıyorum.
- Lisansüstü eğitimimi blockchain ve e-learning üzerine bir tez teslim ederek
  tamamladım, tezimi fırsatım olduğunda proje haline getirmek istiyorum.

## Geçmiş
---------

Eskişehir'den İzmir'e yerleşmiş o dönem pek çevresi olmayan bir çocukken 1993
senesinde bilgisayarla tanıştım.

1994'den itibaren birer sene arayla programlamaya, BBSlere ve en nihayetinde
internete girmem online içerik üretmek konusunda beni de cesaretlendirdi. Önce
tek başıma, bir süre sonra çok katılımcılı web siteleri oluştururken amatör
seviyedeki Basic, Pascal ve C bilgimin üzerine HTML ve ASP öğrenmeye başladım.
Bir noktadan sonra yazılım geliştirmeye olan ilgimi freelance çalışarak harçlık
kazanmaya kadar ilerledim.

2004'de Celal Bayar Üniversitesi Bilgisayar Programcılığı bölümünden mezun
olduktan sonra İzmir'de sırasıyla Egebilgi, Ispro ve devBiz firmalarında Uzman
Yazılım Geliştirici olarak çalıştım. Askerlik görevimi tamamladıktan sonra
2008'de Turkcell Çözüm Ortakları arasında bulunan CMFNET/Mobilpark firmasında
deneyimli Full Stack (Tam Donanımlı) Yazılım Geliştirici ve Takım Liderliği
görevini üstlendim.

2011 yılı itibariyle tekrar akademiye dönerek Doğu Akdeniz Üniversitesi çatısı
altında önce Information Technology lisansı, ardından Information and
Communications in Education tezli yüksek lisansı programlarını tamamladım.
Eğitim hayatım boyunca açık kaynaklı projelerin oluşturulmasına ve
geliştirilmesine elimden geldiğince destek olmaya çalıştım.

Aynı süreç içerisinde profesyonel olarak çeşitli e-ticaret ve mobil uygulama
startuplarında yazılım mimarı, yazılım danışmanı ve yazılım geliştirici
görevlerinde yer aldım. İzmir'e taşınmamla birlikte, KoçSistem'e katılarak Ar-Ge
ve İş Uygulamaları altında Kurumsal Mimari ekibinde görev aldım. Bugün ise
Setur'da Yazılım Yöneticisi olarak çalışmaktayım.

## Trivia
---------

- Uzaktan çalışmaya başlamadan önce teslim tarihlerine uymakta sürekli sorunlar
  yaşıyordum, uzaktan çalışmak modeli bana disiplin kattı.
- Kurumsal çatılarda çokça çalışmış olmama rağmen aslında açık kaynak ekolüne
  daha yakınım.
- 2004'de önlisans'dan mezun oldum, 6 sene sonra belirli bir çalışma deneyiminin
  sonunda tekrar 2010'da üniversiteye geri döndüm.
- 2006'da bünyesinde çalıştığım devBiz firması Microsoft'un Türkiye'den aldığı
  ilk Türk firmasıydı.
- İzmir dışında 6 yıl Kuzey Kıbrıs, 3 yıl Eskişehir, 2 yıla yakın da İstanbul'da
  yaşadım.
- Sayısalcıdan çok sözelci olduğumu düşünürüm, ALES'i yalnızca sözel yaparak
  geçmiştim.
- Günde 8-10 bardak filtre kahve tükettiğim için evime bir espresso makinesi
  almak zorunda kaldım, böylece kahve yapmak daha zahmetli hale geldi ve
  üşenerek tüketimimi azalttım.
- Uzun süre tutkulu bir futbol taraftarıydım. Arsenal, Borussia Dortmund ve
  Galatasaray'ın tüm maçlarını izlerdim. 2011 gibi takip etmeyi bıraktım.
- Bir ara ciddi bir bisiklet kullanıcısıydım, Semi-Pro seviye Trek 4500 bir
  bisikletim vardı.
- Türkiye ve dünya politika tarihi ile ilgili oldukça fazla okuma yaparım.
- Populer çizgi roman külliyatına derinlemesine bir hakimiyetim var.
- Dire Straits, The Smiths, Pink Floyd, Judas Priest ve Iron Maiden müzik
  zevkimde ciddi bir ağırlık noktası oluşturuyor.`,
            },
          ],
        },
      },
    },
  });

  return {
    profileEser,
    profileLinkTwitter,
    profileLinkGitHub,
    profilePageIndex,
    profilePageCv,
    profilePagePortfolio,
    profilePageSpeaking,
    profilePageAbout,
  };
};

export { seedProfileEser };
