import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/shared/config/site.ts";
import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layout.tsx";
// import { buttonVariants } from "@/shared/components/ui/button.tsx";

import logo from "../../../public/brand/positive-1080x1080.svg";

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

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center pt-6 pb-8 md:py-10 gap-6">
        <div className="flex flex-col items-center">
          <Link href="https://github.com/acikkaynak" rel="noreferrer">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Image priority fill src={logo} alt="AYA | Açık Yazılım Ağı" />
          </Link>
        </div>
        {
          /* <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Açık Yazılım Ağı <br className="hidden sm:inline" />
            Bilişim Meta-Topluluğu
          </h1>
          <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Geliştirici ekosistemini her geçen gün daha da iyileştirmek amacıyla
            yola çıkarak bir meta-topluluk oluşturduk. 2015&apos;ten bu yana
            topluluklar, etkinlikler, projeler ve içerikler oluşturmak,
            topluluğu motive etmek, farkındalık aşılamak ve engelleri ortadan
            kaldırmak için çalışıyoruz.
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={`/${placeholders.lang}/guide/`}
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Kurallar
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div> */
        }
      </section>
    </Layout>
  );
};

export { IndexPage, IndexPage as default, metadata };
