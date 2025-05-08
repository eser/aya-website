import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { ProjectCard, type ProjectRole } from "@/shared/components/userland/projects/project-card.tsx";
import { ProjectGrid } from "@/shared/components/userland/projects/project-grid.tsx";

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const profileData = await backend.getProfile(params.slug, locale.code);
  if (profileData === null) {
    notFound();
  }

  return {
    title: `${profileData.title} - ${t("Layout", "Projects")}`,
    description: profileData.description,
  };
}

// Example project data - replace with actual data from your backend
const projects: Array<{
  title: string;
  description: string;
  lastUpdated: string;
  href: string;
  role: ProjectRole;
  stats: {
    issues: number;
    stars: number;
    commits: number;
    prs: {
      total: number;
      resolved: number;
    };
  };
}> = [
  {
    title: "topluluklar",
    description: "Yazılımcı Topluluk ve Mecraları",
    lastUpdated: "2024-10-17T23:27:04.036Z",
    href: "/projects/topluluklar",
    role: "owner" as ProjectRole,
    stats: {
      issues: 20,
      stars: 206,
      commits: 156,
      prs: {
        total: 45,
        resolved: 42,
      },
    },
  },
  {
    title: "stack",
    description: "The Portability Solution for Your Code! 🚀 Powered By Deno and JavaScript.",
    lastUpdated: "2024-10-17T23:27:04.036Z",
    href: "/projects/stack",
    role: "maintainer" as ProjectRole,
    stats: {
      issues: 4,
      stars: 83,
      commits: 234,
      prs: {
        total: 28,
        resolved: 25,
      },
    },
  },
  {
    title: "golang-service-template",
    description: "Go Boilerplate provides a robust foundation that is always ready to be open-sourced",
    lastUpdated: "2024-10-17T23:27:04.036Z",
    href: "/projects/golang-service-template",
    role: "contributor" as ProjectRole,
    stats: {
      issues: 4,
      stars: 64,
      commits: 47,
      prs: {
        total: 12,
        resolved: 10,
      },
    },
  },
];

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const profileData = await backend.getProfile(params.slug, locale.code);
  if (profileData === null) {
    notFound();
  }

  return (
    <article className="content space-y-6">
      <div className="flex flex-col gap-2">
        <h2>{t("Layout", "Projects")}</h2>
        <h3 className="text-muted-foreground">
          {t("Projects", "A collection of open source projects and contributions.")}
        </h3>
      </div>

      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </ProjectGrid>
    </article>
  );
}

export { IndexPage as default };
