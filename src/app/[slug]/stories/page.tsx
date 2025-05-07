import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";
import { type Story, Timeline } from "./_components/timeline.tsx";
import styles from "./page.module.css";

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Sample data - Replace with actual data fetching for the specific profile
const stories: Story[] = [
  {
    id: 1,
    type: "statuses",
    date: "2024-07-26",
    content: "Updated my status with exciting news!",
  },
  {
    id: 2,
    type: "articles",
    date: "2024-07-25",
    content: "Published a new article on Medium about React Hooks.",
  },
  {
    id: 3,
    type: "content",
    date: "2024-07-20",
    content: "Recorded a new video on YouTube about Radix UI.",
  },
  {
    id: 4,
    type: "career updates",
    date: "2024-07-15",
    content: "Started a new role as Senior Developer at Tech Corp.",
  },
  {
    id: 5,
    type: "public speaking",
    date: "2024-07-10",
    content: "Gave a talk at the Local Tech Meetup.",
  },
  {
    id: 6,
    type: "statuses",
    date: "2024-07-05",
    content: "Thinking about the next big thing...",
  },
  {
    id: 7,
    type: "statuses",
    date: "2024-07-01",
    content: "Completed milestone 1 for the ongoing project.",
  },
];

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const { t } = await getTranslations();

  const navigationState = await getNavigationState();

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);
  if (profileData === null) {
    notFound();
  }

  return {
    title: `${profileData.title} - ${t("Layout", "Stories")}`,
    description: profileData.description,
  };
}

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { t } = await getTranslations();

  const navigationState = await getNavigationState();

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);
  if (profileData === null) {
    notFound();
  }

  return (
    <>
      <div className="content">
        <h2>{t("Layout", "Stories")}</h2>
      </div>

      <div className={styles["timeline-container"]}>
        <Timeline stories={stories} />
      </div>
    </>
  );
}

export { IndexPage as default };
