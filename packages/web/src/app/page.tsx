import Link from "next/link";
// import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";

import { Button } from "@/shared/components/ui/button.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
};

// interface IndexPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const IndexPage = (/* props: IndexPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const introText =
    `Bizler bilişim sektöründe halihazırda profesyonel olarak yer alan
gönüllüleriz. 2015'den bu yana yapmış olduğumuz çalışmalarla
kişilerin, firmaların, resmi kurumların ve sivil toplum
kuruluşlarının kullanımına yönelik açık kaynak kodlu teknolojilerin
geliştirilmesine öncülük ediyoruz.

Kahramanmaraş'ta gerçekleşen ve 10 ili etkileyen deprem sonrası
zaten mesleki anlamda çok fazla paylaşımlarda bulunduğumuz sosyal
medya ağlarımızdaki çağrımız kısa süre içerisinde yankı
bulmasını sağlayarak alanında uzman binlerce profesyonelin gönüllü
olarak [afet.org](https://afet.org) projemize katılmasını sağladık.
Deprem sonrası hayati önem taşıyan sorunları çözebilecek teknolojileri
sunabilmek için AFAD, AHBAP, AKUT gibi birçok resmi kurum ve sivil
toplum kuruşu ile irtibatta kaldık ve dış hizmet sağlayıcı olarak
hareket ettik. Birçok kurumsal firmadan insan ve altyapı desteği aldık.

Bugün discord sunucumuzda 24,000'i aşkın gönüllü bilişim
sektörü çalışanı olarak; herhangi bir sosyal sorumluluk gereksinimi
anında bilgi sistemleri ve mühendislik pratiklerini uygulayarak,
açık kaynaklı çözümlerle yaşadığımız topluma katkı sağlamak için
çalışıyoruz.`;

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl">
            Açık Yazılım Ağı <br className="hidden sm:inline" />
            Bilişim Meta-Topluluğu
          </h1>
          <div className="max-w-[980px] text-md leading-7 sm:text-lg sm:leading-8">
            <MDXRemote source={introText} />
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="safe" size="lg" asChild>
            <Link
              href="/about/"
              rel="noreferrer"
            >
              Hakkında
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export { IndexPage, IndexPage as default, metadata };
