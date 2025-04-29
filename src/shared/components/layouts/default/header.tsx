import * as React from "react";

import { GitHubLogin } from "@/shared/modules/auth/github-login.tsx";
import { ThemeSwitcher } from "./theme-switcher.tsx";
import { MainNav } from "./main-nav.tsx";
import { ExternalLinks } from "./external-links.tsx";

import styles from "./header.module.css";

type HeaderProps = {
  placeholders: Record<string, string>;
};

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div>
        <MainNav placeholders={props.placeholders} />
        <ExternalLinks />
        <ThemeSwitcher />
        <GitHubLogin />
      </div>
    </header>
  );
};
