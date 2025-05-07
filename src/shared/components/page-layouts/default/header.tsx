import * as React from "react";

import { siteConfig } from "@/shared/config.ts";
import { GitHubLogin } from "@/shared/modules/auth/github-login.tsx";
import { ThemeSwitcher } from "./theme-switcher.tsx";
import { MainNav } from "./main-nav.tsx";
import { SearchBar } from "./search-bar.tsx";
// import { ExternalLinks } from "./external-links.tsx";

import styles from "./header.module.css";

type HeaderProps = {
  placeholders: Record<string, string>;
};

export async function Header(props: HeaderProps) {
  const login = await siteConfig.features.login();

  return (
    <header className={styles.header}>
      <div>
        <MainNav placeholders={props.placeholders} />
        <SearchBar />
        {/* <ExternalLinks /> */}
        <ThemeSwitcher />
        {login && <GitHubLogin />}
      </div>
    </header>
  );
}
