import { GitHubLogin } from "@/shared/components/github-login.tsx";
import { ThemeToggle } from "./theme-toggle.tsx";
import { MainNav } from "./main-nav.tsx";
import { ExternalLinks } from "./external-links.tsx";

import styles from "./header.module.css";

interface HeaderProps {
  placeholders: Record<string, string>;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles["inner-container"]}>
        <MainNav placeholders={props.placeholders} />
        <div className={styles["extension"]}>
          <ExternalLinks placeholders={props.placeholders} />
          <ThemeToggle />
          <GitHubLogin />
        </div>
      </div>
    </header>
  );
};

export { Header };
