import Link from "next/link";
// import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { siteConfig } from "@/shared/config/site.ts";
import { type Language } from "@/shared/i18n.ts";
import { Layout } from "@/shared/components/layout.tsx";

import { buttonVariants } from "@/shared/components/ui/button.tsx";

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

interface IndexPageProps {
  params: {
    lang: Language;
  };
}

const IndexPage = (props: IndexPageProps) => {
  const placeholders: Record<string, string> = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lang: props.params.lang,
  };

  const introText =
    `Bizler bilişim sektöründe halihazırda profesyonel olarak yer alan
gönüllüleriz. 2015'den bu yana yapmış olduğumuz çalışmalarla
kişilerin, firmaların, resmi kurumların ve sivil toplum
kuruluşlarının kullanımına yönelik açık kaynak kodlu teknolojilerin
geliştirilmesine öncülük ediyoruz.
<br />
Kahramanmaraş'ta gerçekleşen ve 10 ili etkileyen deprem sonrası
zaten mesleki anlamda çok fazla paylaşımlarda bulunduğumuz sosyal
medya ağlarımızdaki çağrımız kısa süre içerisinde yankı
bulmasını sağlayarak alanında uzman binlerce profesyonelin gönüllü
olarak [afet.org](https://afet.org) projemize katılmasını sağladık.
Deprem sonrası hayati önem taşıyan sorunları çözebilecek teknolojileri
sunabilmek için AFAD, AHBAP, AKUT gibi birçok resmi kurum ve sivil
toplum kuruşu ile irtibatta kaldık ve dış hizmet sağlayıcı olarak
hareket ettik. Birçok kurumsal firmadan insan ve altyapı desteği aldık.
<br />
Bugün discord sunucumuzda 24,000'i aşkın gönüllü bilişim
sektörü çalışanı olarak; herhangi bir sosyal sorumluluk gereksinimi
anında bilgi sistemleri ve mühendislik pratiklerini uygulayarak,
açık kaynaklı çözümlerle yaşadığımız topluma katkı sağlamak için
çalışıyoruz.`;

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center pt-6 pb-8 md:py-10 gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Açık Yazılım Ağı <br className="hidden sm:inline" />
            Bilişim Meta-Topluluğu
          </h1>
          <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            <MDXRemote source={introText} />
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            href={`/${placeholders.lang}/about/`}
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Hakkında
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export { IndexPage, IndexPage as default, metadata };
