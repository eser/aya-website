import * as React from "react";

import { Separator } from "@/shared/components/ui/separator.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";
import { LocaleSwitcher } from "./locale-switcher.tsx";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.links}>
          <SiteLink href="/aya/">AYA</SiteLink>
          <Separator className={styles.div} orientation="vertical" decorative />
          <SiteLink href="/aya/policies/">Kurallar</SiteLink>
          <Separator className={styles.div} orientation="vertical" decorative />
          <SiteLink href="/aya/about/">Hakkında</SiteLink>
        </div>
        <div className={styles.locales}>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
