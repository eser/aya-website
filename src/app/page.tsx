import * as React from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/shared/config.ts";
import { mdx } from "@/shared/lib/mdx.tsx";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import { Astronaut } from "@/shared/components/widgets/astronaut/astronaut.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";
import { components } from "@/shared/components/userland/userland.ts";

import styles from "./page.module.css";

async function IndexPage() {
  const navigationState = await getNavigationState();

  const { t } = await getTranslations();

  const placeholders: Record<string, string> = {
    locale: navigationState.locale.name,
  };

  const contentText = `**AYA (Açık Yazılım Ağı)**, sosyal bir yarar
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

  const mdxSource = await mdx(contentText, components);

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 grid items-center">
        <div className="flex max-w-[980px] flex-col items-start pt-10">
          <div className={styles["astronaut-layer"]}>
            <Astronaut width={400} height={400} />
          </div>
          <article className="content">
            <h1>Açık Yazılım Ağı</h1>
            <h3>Gönüllü geliştirilen yazılımlarla oluşan bir yazılım vakfı</h3>

            <div className="mt-10" />

            {mdxSource?.content}
          </article>
        </div>
        <div className="flex gap-4">
          <Button variant="default" size="lg" asChild>
            <SiteLink href="/aya/about" rel="noreferrer">
              {t("Home", "Rest of the story")}
              <ArrowRightIcon />
            </SiteLink>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <SiteLink target="_blank" rel="noreferrer" href={siteConfig.links.github}>
              GitHub
            </SiteLink>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
