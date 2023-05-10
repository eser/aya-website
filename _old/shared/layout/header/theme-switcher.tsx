import { Conditional } from "@webclient/shared/react/conditional";
import Link from "next/link";

const styles: Record<string, string> = {};

interface ThemeSwitcherProps {
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  // const { theme, setTheme } = useTheme();
  const theme: string = "light";

  return (
    <div>
      <Link href="/">
        <Conditional
          if={theme !== "dark"}
          then={
            <a
              href="/"
              onClick={(e) => {
                // setTheme("dark");
                e.preventDefault();
              }}
            >
              <div className={styles.icon}>moon</div>
            </a>
          }
          otherwise={
            <a
              href="/"
              onClick={(e) => {
                // setTheme("light");
                e.preventDefault();
              }}
            >
              <div className={styles.icon}>sun</div>
            </a>
          }
        />
      </Link>
    </div>
  );
};

export { ThemeSwitcher, ThemeSwitcher as default };
