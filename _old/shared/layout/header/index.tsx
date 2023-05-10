import { Container, createStyles, Flex } from "@mantine/core";
import { type Language } from "@webclient/shared/i18n";
import { GitHubLoginButton } from "./github-login-button";

interface HeaderProps {
  lang: Language;
}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    padding: theme.spacing.sm,
  },
}));

const Header = (props: HeaderProps) => {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.container}>
      <Flex justify="flex-end" align="center" direction="row">
        <GitHubLoginButton />
      </Flex>
    </Container>
  );
};

export { Header, Header as default };
