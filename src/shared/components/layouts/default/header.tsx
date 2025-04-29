import { GitHubLogin } from "@/shared/components/github-login.tsx";
import { ThemeToggle } from "./theme-toggle.tsx";
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
        <ThemeToggle />
        <GitHubLogin />
      </div>
    </header>
  );
};
