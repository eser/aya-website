import Link from "next/link";
import { ActionIcon, createStyles, Flex, Space, Title } from "@mantine/core";

import { type Language, useI18N } from "@webclient/shared/i18n";

interface SidebarProps {
  lang: Language;
}

const useStyles = createStyles((theme) => ({
  container: {
    padding: "50px",

    "& a": {
      color: "inherit",
    },
  },

  subtitle: {
    fontFamily: theme.fontFamily,
  },

  links: {
    "& a, & a:hover": {
      color: "white",

      "& i": {
        fontSize: "1.25rem",
      },
    },
  },
}));

const Sidebar = (props: SidebarProps) => {
  const { classes } = useStyles();
  const { t } = useI18N(props.lang.code);

  return (
    <div className={classes.container}>
      <Flex direction="column" gap="md">
        <div>
          <Title order={1}>
            <Link href="/">Onİleri</Link>
          </Title>
          <Title order={2} size="h6" className={classes.subtitle}>
            Meta-community
          </Title>

          <Space h="sm" />

          <Flex gap="xs" className={classes.links}>
            <ActionIcon
              component="a"
              aria-label="Twitter"
              color="gray.3"
              size="lg"
              variant="filled"
              href="https://twitter.com/10forward_io"
            >
              <i className="bx bxl-twitter" />
            </ActionIcon>
            <ActionIcon
              component="a"
              aria-label="Discord"
              color="gray.3"
              size="lg"
              variant="filled"
              href="https://discord.io/10forward"
            >
              <i className="bx bxl-discord" />
            </ActionIcon>
            <ActionIcon
              component="a"
              aria-label="Telegram"
              color="gray.3"
              size="lg"
              variant="filled"
              href="https://telegram.me/tenforward"
            >
              <i className="bx bxl-telegram" />
            </ActionIcon>
            <ActionIcon
              component="a"
              aria-label="GitHub"
              color="gray.3"
              size="lg"
              variant="filled"
              href="https://github.com/10fwd"
            >
              <i className="bx bxl-github" />
            </ActionIcon>
          </Flex>
        </div>

        <Space h="xs" />

        <Title order={3} size="h4">
          <Link href={`/`}>Girişimler</Link>
        </Title>
        {
          /* <Title order={3} size="h4">
          <Link href={`/community/`}>Topluluk</Link>
        </Title> */
        }
        <Title order={3} size="h4">
          <Link href={`/guide/`}>Rehber</Link>
        </Title>
        <Title order={3} size="h4">
          <Link href={`/agreements/`}>Sözleşmeler</Link>
        </Title>
        <Title order={3} size="h4">
          <Link href={`/about/`}>Hakkında</Link>
        </Title>
      </Flex>
    </div>
  );
};

export { Sidebar, Sidebar as default };
