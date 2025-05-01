import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

import { backend } from "@/shared/modules/backend/backend.ts";

import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";

import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

async function Layout(props: LayoutProps) {
  const params = await props.params;
  const placeholders: Record<string, string> = {
    slug: params.slug,
  };

  const data = await backend.getProfile(params.slug);

  if (data === null) {
    notFound();
  }

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4">
        <div className={styles.hero}>
          <h1>
            {data.title}
          </h1>
          <h2>
            {data.description}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href={`/${params.slug}`}>
                  Profil
                </Link>
              </li>
              {data.pages?.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${params.slug}/${page.slug}`}>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {props.children}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export { Layout as default };
