import * as React from "react";
import Link from "next/link";

import { formatDateString } from "@/shared/lib/date.ts";
import { Card } from "@/shared/components/ui/card.tsx";
import { Icons } from "@/shared/components/icons.tsx";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import styles from "./project-card.module.css";

export type ProjectRole = "follower" | "sponsor" | "contributor" | "maintainer" | "lead" | "owner";

export interface ProjectCardProps {
  title: string;
  description: string;
  lastUpdated: string;
  href: string;
  role: ProjectRole;
  stats?: {
    issues?: number;
    stars?: number;
    commits?: number;
    prs?: {
      total: number;
      resolved: number;
    };
  };
}

export async function ProjectCard({
  title,
  description,
  lastUpdated,
  href,
  role,
  stats,
}: ProjectCardProps) {
  const { locale, t } = await getTranslations();

  return (
    <Link role="card" href={href} className={styles.link}>
      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.attributes}>
            <div className={styles.row}>
              <div>{t("Projects", "Project description")}</div>
              <div>{description}</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Project repository")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Project website")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Project contributor count")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "My role in the project")}</div>
              <div>{t("Projects", role)}</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "My first contribution")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "My last contribution")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "My contributions")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Opened PRs by me")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Merged PRs by me")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Issues opened by me")}</div>
              <div>~</div>
            </div>
            <div className={styles.row}>
              <div>{t("Projects", "Issues contributed by me")}</div>
              <div>~</div>
            </div>
          </div>
          <div className={styles.footer}>
            <span className={styles.date}>
              {t("Projects", "Last update")}: {formatDateString(lastUpdated, locale.code)}
            </span>
            {stats && (
              <div className={styles.stats}>
                {stats.commits !== undefined && (
                  <span className={styles.stat}>
                    <Icons.gitCommit className={styles.icon} />
                    {stats.commits}
                  </span>
                )}
                {stats.prs && (
                  <span className={styles.stat} title={`${stats.prs.resolved} resolved out of ${stats.prs.total} PRs`}>
                    <Icons.gitPullRequest className={styles.icon} />
                    {stats.prs.resolved}/{stats.prs.total}
                  </span>
                )}
                {stats.issues !== undefined && (
                  <span className={styles.stat}>
                    <Icons.gitFork className={styles.icon} />
                    {stats.issues}
                  </span>
                )}
                {stats.stars !== undefined && (
                  <span className={styles.stat}>
                    <Icons.star className={styles.icon} />
                    {stats.stars}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
