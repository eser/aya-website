import * as React from "react";

import type { Metadata } from "next";

import Link from "next/link";
import { mdx } from "@/shared/lib/mdx.ts";

import { siteConfig } from "@/shared/config.ts";
// import type { Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import { Astronaut } from "@/shared/components/widgets/astronaut/astronaut.tsx";
import { components } from "@/shared/components/userland/userland.ts";

import styles from "./page.module.css";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};

// type IndexPageProps = {
//   params: {
//     // lang: Language;
//   };
// };

const IndexPage = async (/* props: IndexPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const introText = `**Açık Yazılım Ağı (AYA)**, sosyal bir yarar
oluşturmak motivasyonuyla nitelikli bilişim çözümleri üreten
gönüllülerin bir araya gelmesine ve projeler gerçekleştirmesine
imkan sağlayan bir platformdur.

Bugüne kadar projelere yetkin ve uzman gönüllü desteği ve teknik
kaynaklar sunarak kolektif bir şekilde gerçeklenmelerini sağladık.
Bu projeler resmi kurumlar ve sivil toplum kuruluşları başta olmak
üzere herkesin kullanımına ve denetimine açık, açık kaynak
lisanslarına sahip bilişim çözümleri oldular. Bizim buradaki rolümüz
hem gönüllülerin aralarındaki iletişime aracı olmak hem de kaynak
yönetiminde koordinasyon sağlamak oldu.

Sosyal yarar gözeten ve kar amacı gütmeyen bir oluşum olarak AYA,
bugün yoluna portföyünde bilişim projeleri barındıran **yazılım vakfı
kimliğiyle** devam ediyor.`;

  const mdxSource = await mdx(
    introText,
    components,
  );

  return (
    <Layout placeholders={placeholders}>
      <section className="container mx-auto px-4 grid items-center">
        <div className="flex max-w-[980px] flex-col items-start">
          <div className={styles["astronaut-layer"]}>
            <Astronaut width={400} height={400} />
          </div>
          <div className={styles.hero}>
            <h1>
              Açık Yazılım Ağı
            </h1>
            <h2>
              Gönüllü geliştirilen yazılımlarla oluşan bir yazılım vakfı
            </h2>
          </div>

          <article className={styles.content}>
            {mdxSource?.content}
          </article>
        </div>
        <div className="flex gap-4">
          <Button variant="default" size="lg" asChild>
            <Link
              href="/aya/"
              rel="noreferrer"
            >
              Yazının devamı →
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

export { IndexPage as default };
