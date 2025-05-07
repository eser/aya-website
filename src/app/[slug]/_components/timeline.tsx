"use client";

import * as React from "react";

import type { Story } from "@/shared/modules/backend/stories/types.ts";
import { useTranslations } from "@/shared/modules/i18n/use-translations.tsx";

import { FilterBar, type FilterKeyType } from "./filter-bar.tsx"; // Import the type
import styles from "./timeline.module.css";

export interface TimelineProps {
  stories: Story[];
}

export function Timeline(props: TimelineProps) {
  const { t } = useTranslations();

  const [activeFilter, setActiveFilter] = React.useState<FilterKeyType>("all");

  const filteredStories = props.stories.filter((story) => activeFilter === "all" || story.kind === activeFilter);

  const filterMapping: Record<FilterKeyType, string> = {
    all: t("Stories", "All"),
    status: t("Stories", "Status"),
    announcement: t("Stories", "Announcement"),
    article: t("Stories", "Article"),
    content: t("Stories", "Content"),
    presentation: t("Stories", "Presentation"),
  };

  return (
    <>
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} mapping={filterMapping} />

      <ul className={styles.items}>
        {filteredStories.map((story) => (
          <li key={story.id} className={styles.item}>
            <div className={styles.dot} />
            <time className={styles.date}>{new Date(story.published_at!).toLocaleDateString("tr-TR")}</time>
            <div className={styles.box}>
              <span className={styles.kind}>{filterMapping[story.kind]}</span>
              <p className={styles.content}>{story.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
