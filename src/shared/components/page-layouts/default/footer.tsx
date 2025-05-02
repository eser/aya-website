import * as React from "react";

import { Separator } from "@/shared/components/ui/separator.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <SiteLink href="/aya/">açık yazılım ağı</SiteLink>
        <Separator className={styles.div} orientation="vertical" decorative />
        <SiteLink href="/aya/policies/">Kurallar</SiteLink>
        <Separator className={styles.div} orientation="vertical" decorative />
        <SiteLink href="/aya/about/">Hakkında</SiteLink>
      </div>
    </footer>
  );
}
