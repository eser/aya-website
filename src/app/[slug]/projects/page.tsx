import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { ProjectCard } from "@/shared/components/userland/projects/project-card.tsx";
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

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const profileData = await backend.getProfile(params.slug, locale.code);
  if (profileData === null) {
    notFound();
  }

  const projectsData = await backend.getProjects(profileData.id, locale.code);

  if (projectsData === null) {
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
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </ProjectGrid>
    </article>
  );
}

export { IndexPage as default };
