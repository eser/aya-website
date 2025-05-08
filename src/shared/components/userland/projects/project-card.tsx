import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Card } from "@/shared/components/ui/card.tsx";
import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import type { Project } from "@/shared/modules/backend/projects/types.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";

import styles from "./project-card.module.css";

export interface ProjectCardProps {
  project: Project;
}

export async function ProjectCard(props: ProjectCardProps) {
  const { t } = await getTranslations();

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <Link href={`/projects/${props.project.id}`} className={styles.header}>
          <h3 className={styles.title}>{props.project.title}</h3>
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
        </Link>
        <div className={styles.description}>{props.project.description}</div>
        <div className={styles.attributes}>
          <div className={styles.section}>
            <div className={styles.heading}>{t("Projects", "My role in the project")}</div>
            <div className={styles.text}>{t("Projects", props.project.role)}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitCommit className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "My first contribution")}</div>
                  <div className={styles.value}>01 Mayıs 2022</div>
                </div>
              </div>
              <div>
                <Icons.gitCommit className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "My last contribution")}</div>
                  <div className={styles.value}>23 Mayıs 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Out of 50 total PRs</div>
            <div className={styles.text}>{t("Projects", "PRs")}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "Opened PRs by me")}</div>
                  <div className={styles.value}>20</div>
                </div>
              </div>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "Merged PRs by me")}</div>
                  <div className={styles.value}>10</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Out of 200 total Issues</div>
            <div className={styles.text}>{t("Projects", "Issues")}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "Issues opened by me")}</div>
                  <div className={styles.value}>20</div>
                </div>
              </div>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Projects", "Issues contributed by me")}</div>
                  <div className={styles.value}>10</div>
                </div>
              </div>
            </div>
          </div>
          {
            /* <div className={styles.section}>
            <div>{t("Projects", "My contributions")}</div>
            <div>~</div>
          </div> */
          }
        </div>
        <div className={styles.footer}>
          <Link href={`https://github.com/${props.project.repository}`} target="_blank">
            <Button variant="outline">
              <Icons.github className={styles.icon} />
              {props.project.repository}
            </Button>
          </Link>
          <Link href={`/projects/${props.project.id}`} className={styles.header}>
            <Button variant="default">
              <Icons.star className={styles.icon} />
              {t("Projects", "Project Details")}
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
