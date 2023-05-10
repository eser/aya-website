import { type ReactNode } from "react";
import Head from "next/head";
// import { useRouter } from "next/router";
import { createStyles, Flex } from "@mantine/core";
import { type Language } from "@webclient/shared/i18n";
import { Sidebar } from "./sidebar/index";
import { Header } from "./header/index";
import { Footer } from "./footer/index";

const styles: Record<string, string> = {};

interface LayoutProps {
  lang: Language;
  children: ReactNode;
}

const useStyles = createStyles((theme) => ({
  page: {
    height: "100vh",
  },

  sidebar: {
    flexBasis: "18rem",
    flexShrink: 0,
    flexGrow: 0,
  },

  content: {
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    overflowY: "scroll",
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 1,
  },
}));

const Layout = (props: LayoutProps) => {
  // const router = useRouter();
  const { classes } = useStyles();

  // const pathname = (router.pathname === "/[...slug]")
  //   ? `/${router.query?.slug?.[0]}`
  //   : router.pathname;

  // const isActiveSection = (section: string) => {
  //   return pathname === `/${section}` || pathname.startsWith(`/${section}/`);
  // };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
        />
      </Head>

      <Flex className={classes.page}>
        <header className={classes.sidebar}>
          <Sidebar lang={props.lang} />
        </header>

        <Flex direction="column" className={classes.content}>
          <Header lang={props.lang} />

          <main className={styles["page-content"]}>
            <nav className={styles["top-side"]} />

            <section className={styles["content-section"]}>
              <div className={styles.inner}>
                {props.children}
              </div>
            </section>
          </main>

          <footer>
            <Footer lang={props.lang} />
          </footer>
        </Flex>
      </Flex>
    </>
  );
};

export { Layout, Layout as default };
