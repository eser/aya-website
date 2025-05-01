"use client";

import * as React from "react";

import { FilterBar } from "./filter-bar.tsx"; // Import the type

import styles from "./timeline.module.css";

const filterMapping: Record<string, string> = {
  "all": "Tümü",
  "statuses": "Durum",
  "projects": "Proje",
  "publications": "Yayın",
  "public speaking": "Topluluğa Konuşma",
  "career updates": "Kariyer Güncellemesi",
};

export type FilterKeyType = keyof typeof filterMapping;

export interface Story {
  id: number;
  type: string;
  date: string; // Or Date object
  content: string;
}

export interface TimelineProps {
  stories: Story[];
}

export const Timeline: React.FC<TimelineProps> = ({ stories }) => {
  const [activeFilter, setActiveFilter] = React.useState<FilterKeyType>("all");

  const filteredStories = stories.filter((story) => activeFilter === "all" || story.type === activeFilter);

  return (
    <>
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} mapping={filterMapping} />

      <ul className={styles.timeline}>
        {filteredStories.map((story) => (
          <li key={story.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <time className={styles.timelineDate}>{new Date(story.date).toLocaleDateString("tr-TR")}</time>
            <div className={styles.timelineContent}>
              <span className={styles.timelineType}>
                {filterMapping[story.type]}
              </span>
              <p className={styles.timelineText}>{story.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
