import * as React from "react";

import { formatDateString } from "@/shared/lib/date.ts";
import { Card } from "@/shared/components/ui/card.tsx";
import { Icons } from "@/shared/components/icons.tsx";
import type { Project } from "@/shared/modules/backend/projects/types.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";

import styles from "./project-card.module.css";

export interface ProjectCardProps {
  project: Project;
}

export async function ProjectCard(props: ProjectCardProps) {
  const { locale, t } = await getTranslations();

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{props.project.title}</h3>
        </div>
        <div className={styles.attributes}>
          <div className={styles.row}>
            <div>{t("Projects", "Project description")}</div>
            <div>{props.project.description}</div>
          </div>
          <div className={styles.row}>
            <div>{t("Projects", "Project repository")}</div>
            <div>{props.project.repository}</div>
          </div>
          <div className={styles.row}>
            <div>{t("Projects", "Project website")}</div>
            <div>{props.project.website}</div>
          </div>
          <div className={styles.row}>
            <div>{t("Projects", "Project contributor count")}</div>
            <div>~</div>
          </div>
          <div className={styles.row}>
            <div>{t("Projects", "My role in the project")}</div>
            <div>{t("Projects", props.project.role)}</div>
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
            {t("Projects", "Last update")}: {formatDateString(props.project.lastUpdated, locale.code)}
          </span>
          {props.project.stats && (
            <div className={styles.stats}>
              {props.project.stats.commits !== undefined && (
                <span className={styles.stat}>
                  <Icons.gitCommit className={styles.icon} />
                  {props.project.stats.commits}
                </span>
              )}
              {props.project.stats.prs && (
                <span
                  className={styles.stat}
                  title={`${props.project.stats.prs.resolved} resolved out of ${props.project.stats.prs.total} PRs`}
                >
                  <Icons.gitPullRequest className={styles.icon} />
                  {props.project.stats.prs.resolved}/{props.project.stats.prs.total}
                </span>
              )}
              {props.project.stats.issues !== undefined && (
                <span className={styles.stat}>
                  <Icons.gitFork className={styles.icon} />
                  {props.project.stats.issues}
                </span>
              )}
              {props.project.stats.stars !== undefined && (
                <span className={styles.stat}>
                  <Icons.star className={styles.icon} />
                  {props.project.stats.stars}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
