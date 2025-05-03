import * as React from "react";
// import { notFound } from "next/navigation";

// import type { Metadata } from "next";

// import { backend } from "@/shared/modules/backend/backend.ts";
import { type Story, Timeline } from "./_components/timeline.tsx";
// import { siteConfig } from "@/shared/config.ts";
// import type { Language } from "@/shared/modules/i18n/languages.ts";

import styles from "./page.module.css";

// Metadata might be better handled primarily in layout.tsx now
// export const metadata: Metadata = { ... };
// export const viewport = { ... };

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Sample data - Replace with actual data fetching for the specific profile
const stories: Story[] = [
  { id: 1, type: "statuses", date: "2024-07-26", content: "Updated my status with exciting news!" },
  { id: 2, type: "articles", date: "2024-07-25", content: "Published a new article on Medium about React Hooks." },
  { id: 3, type: "content", date: "2024-07-20", content: "Recorded a new video on YouTube about Radix UI." },
  {
    id: 4,
    type: "career updates",
    date: "2024-07-15",
    content: "Started a new role as Senior Developer at Tech Corp.",
  },
  { id: 5, type: "public speaking", date: "2024-07-10", content: "Gave a talk at the Local Tech Meetup." },
  { id: 6, type: "statuses", date: "2024-07-05", content: "Thinking about the next big thing..." },
  { id: 7, type: "statuses", date: "2024-07-01", content: "Completed milestone 1 for the ongoing project." },
];

function IndexPage(_props: IndexPageProps) {
  // const params = await props.params;

  // You would typically fetch profile data here or pass it down
  // const profileData = await backend.getProfile(params.slug); // This needs adjustment for client component
  // if (profileData === null) {
  //   notFound();
  // }

  return (
    <article className="content">
      <h2>Hikayeler</h2>

      <div className={styles["timeline-container"]}>
        <Timeline stories={stories} />
      </div>
    </article>
  );
}

export { IndexPage as default };
