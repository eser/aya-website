import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Card } from "@/shared/components/ui/card.tsx";
import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import type { Profile, ProfileMembership } from "@/shared/modules/backend/profiles/types.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";

import styles from "./product-card.module.css";

export interface ProductCardProps {
  product: Profile;
  membership?: ProfileMembership;
}

export async function ProductCard(props: ProductCardProps) {
  const { t } = await getTranslations();

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <Link href={`/profiles/${props.product.id}`} className={styles.header}>
          <h3 className={styles.title}>{props.product.title}</h3>
          <div className={styles.stats}>
            {props.product.stats.commits !== undefined && (
              <span className={styles.stat}>
                <Icons.gitCommit className={styles.icon} />
                {props.product.stats.commits}
              </span>
            )}
            {props.product.stats.prs && (
              <span
                className={styles.stat}
                title={`${props.product.stats.prs.resolved} resolved out of ${props.product.stats.prs.total} PRs`}
              >
                <Icons.gitPullRequest className={styles.icon} />
                {props.product.stats.prs.resolved}/{props.product.stats.prs.total}
              </span>
            )}
            {props.product.stats.issues !== undefined && (
              <span className={styles.stat}>
                <Icons.gitFork className={styles.icon} />
                {props.product.stats.issues}
              </span>
            )}
            {props.product.stats.stars !== undefined && (
              <span className={styles.stat}>
                <Icons.star className={styles.icon} />
                {props.product.stats.stars}
              </span>
            )}
          </div>
        </Link>
        <div className={styles.description}>{props.product.description}</div>
        <div className={styles.attributes}>
          <div className={styles.section}>
            <div className={styles.heading}>{t("Projects", "My role in the project")}</div>
            <div className={styles.text}>{t("Projects", props.product.role)}</div>
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
            <div className={styles.heading}>Out of 50 total</div>
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
            <div className={styles.heading}>Out of 200 total</div>
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
          <Link href={`https://github.com/${props.product.repository}`} target="_blank">
            <Button variant="outline">
              <Icons.github className={styles.icon} />
              {props.product.repository}
            </Button>
          </Link>
          <Link href={`/profiles/${props.product.slug}`} className={styles.header}>
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
