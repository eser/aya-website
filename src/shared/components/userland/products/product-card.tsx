import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";
import { Icons } from "@/shared/components/icons.tsx";
import { Card } from "@/shared/components/ui/card.tsx";
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
        <Link href={`/${props.product.slug}`} className={styles.header}>
          <h3 className={styles.title}>{props.product.title}</h3>
          <div className={styles.stats}>
            {props.membership?.properties?.stats?.commits !== undefined && (
              <span className={styles.stat}>
                <Icons.gitCommit className={styles.icon} />
                {props.membership?.properties?.stats?.commits}
              </span>
            )}
            {props.membership?.properties?.stats?.prs && (
              <span
                className={styles.stat}
                title={`${props.membership?.properties?.stats?.prs.resolved} resolved out of ${props.membership?.properties?.stats?.prs.total} PRs`}
              >
                <Icons.gitPullRequest className={styles.icon} />
                {props.membership?.properties?.stats?.prs.resolved}/{props.membership?.properties?.stats?.prs.total}
              </span>
            )}
            {props.membership?.properties?.stats?.issues !== undefined && (
              <span className={styles.stat}>
                <Icons.gitFork className={styles.icon} />
                {props.membership?.properties?.stats?.issues.total}
              </span>
            )}
            {props.membership?.properties?.stats?.stars !== undefined && (
              <span className={styles.stat}>
                <Icons.star className={styles.icon} />
                {props.membership?.properties?.stats?.stars}
              </span>
            )}
          </div>
        </Link>
        <div className={styles.description}>{props.product.description}</div>
        <div className={styles.attributes}>
          <div className={styles.section}>
            <div className={styles.heading}>{t("Contributions", "My role in the project")}</div>
            <div className={styles.text}>{t("Contributions", props.membership?.kind ?? "-")}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitCommit className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "My first contribution")}</div>
                  <div className={styles.value}>01 Mayıs 2022</div>
                </div>
              </div>
              <div>
                <Icons.gitCommit className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "My last contribution")}</div>
                  <div className={styles.value}>23 Mayıs 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Out of 50 total</div>
            <div className={styles.text}>{t("Contributions", "PRs")}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "Opened PRs by me")}</div>
                  <div className={styles.value}>20</div>
                </div>
              </div>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "Merged PRs by me")}</div>
                  <div className={styles.value}>10</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Out of 200 total</div>
            <div className={styles.text}>{t("Contributions", "Issues")}</div>
            <div className={styles.information}>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "Issues opened by me")}</div>
                  <div className={styles.value}>20</div>
                </div>
              </div>
              <div>
                <Icons.gitPullRequest className={styles.icon} />
                <div>
                  <div className={styles.key}>{t("Contributions", "Issues contributed by me")}</div>
                  <div className={styles.value}>10</div>
                </div>
              </div>
            </div>
          </div>
          {
            /* <div className={styles.section}>
            <div>{t("Contributions", "My contributions")}</div>
            <div>~</div>
          </div> */
          }
        </div>
        <div className={styles.footer}>
          <SiteLink href={`/${props.product.slug}`} className={styles.header}>
            <Button variant="default">
              <Icons.star className={styles.icon} />
              {t("Contributions", "Project Details")}
              <ArrowRightIcon />
            </Button>
          </SiteLink>
        </div>
      </div>
    </Card>
  );
}
