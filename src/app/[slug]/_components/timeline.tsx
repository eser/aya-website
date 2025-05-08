"use client";

import * as React from "react";

import { formatDateString } from "@/shared/lib/date.ts";
import type { GetStoriesData } from "@/shared/modules/backend/stories/get-stories.ts";
import { useTranslations } from "@/shared/modules/i18n/use-translations.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";

import { FilterBar, type FilterKeyType } from "./filter-bar.tsx"; // Import the type
import styles from "./timeline.module.css";

export interface TimelineProps {
  stories: GetStoriesData;
}

export function Timeline(props: TimelineProps) {
  const { t, locale } = useTranslations();

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
            <time className={styles.date}>{formatDateString(story.published_at!, locale.code)}</time>
            <SiteLink className={styles.box} href={`/${story.author_profile.slug}/stories/${story.slug}`}>
              {story.cover_picture_uri && (
                <img src={story.cover_picture_uri} alt={story.title ?? ""} className={styles["cover-picture"]} />
              )}
              <div className={styles.text}>
                <span className={styles.kind}>{filterMapping[story.kind]}</span>
                <p className={styles.title}>{story.title}</p>
                <p className={styles.summary}>{story.summary}</p>
              </div>
            </SiteLink>
          </li>
        ))}
      </ul>
    </>
  );
}
