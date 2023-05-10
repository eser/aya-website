import Link from "next/link";

import { siteConfig } from "@/shared/config/site";
import { Layout } from "@/shared/components/layout";
import { buttonVariants } from "@/shared/components/ui/button";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
const metadata = {
  title: {
    default: "Onİleri",
    template: "%s | Onİleri",
  },
  description:
    "Geliştiricilere yönelik bir meta-topluluk.",

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Onİleri <br className="hidden sm:inline" />
            Geliştirici Meta-Topluluğu
          </h1>
          <p className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Geliştirici ekosistemini her geçen gün daha da iyileştirmek amacıyla
            yola çıkarak bir meta-topluluk oluşturduk. 2015'ten bu yana topluluklar,
            etkinlikler, projeler ve içerikler oluşturmak, topluluğu motive etmek,
            farkındalık aşılamak ve engelleri ortadan kaldırmak için çalışıyoruz.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/guide/"
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
        </div>
      </section>
    </Layout>
  );
};

export { IndexPage, IndexPage as default, metadata };
