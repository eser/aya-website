import * as React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";

import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

async function Layout(props: LayoutProps) {
  const params = await props.params;

  const { t } = await getTranslations();

  const navigationState = await getNavigationState();

  const placeholders: Record<string, string> = {
    locale: navigationState.locale.name,
    slug: params.slug,
  };

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);

  if (profileData === null) {
    notFound();
  }

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
          <aside className="flex flex-col gap-4">
            {profileData.profile_picture_uri && (
              <Image
                src={profileData.profile_picture_uri}
                alt={`${profileData.title}'s profile picture`}
                width={280}
                height={280}
                className="rounded-full border"
              />
            )}

            <div className={styles.hero}>
              <h1 className={styles.title}>{profileData.title}</h1>

              <div className={styles.subtitle}>
                {profileData.slug}
                {profileData.pronouns && ` · ${profileData.pronouns}`}
              </div>

              <p className={styles.description}>{profileData.description}</p>
            </div>

            <nav className={styles.nav}>
              <ul>
                <li>
                  <SiteLink href={`/${params.slug}`}>{t("Layout", "Profile")}</SiteLink>
                </li>

                {profileData.show_stories && (
                  <li>
                    <SiteLink href={`/${params.slug}/stories`}>{t("Layout", "Stories")}</SiteLink>
                  </li>
                )}

                {profileData.show_projects && (
                  <li>
                    <SiteLink href={`/${params.slug}/projects`}>{t("Layout", "Projects")}</SiteLink>
                  </li>
                )}

                {profileData.pages?.map((page) => (
                  <li key={page.slug}>
                    <SiteLink href={`/${params.slug}/${page.slug}`}>{page.title}</SiteLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main>{props.children}</main>
        </div>
      </section>
    </PageLayout>
  );
}

export { Layout as default };
