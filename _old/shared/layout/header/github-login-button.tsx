import { type MouseEvent } from "react";
import { Button, createStyles } from "@mantine/core";
import {
  auth,
  AuthProviders,
  useAuthContext,
} from "@webclient/services/auth/mod";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    padding: theme.spacing.sm,
  },

  button: {
    color: theme.colors.gray[7],

    "& i": {
      fontSize: "1.25rem",
    },
  },
}));

const GitHubLoginButton = () => {
  const userState = useAuthContext();
  const { classes } = useStyles();

  const buttonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userState.isLoading) {
      return;
    }

    if (userState.isLoggedIn) {
      auth.signOut();
      return;
    }

    auth.signInWithProvider(AuthProviders.GitHub);
  };

  return (
    <Button
      type="button"
      variant="default"
      size="md"
      className={classes.button}
      leftIcon={<i className="bx bxl-github" />}
      onClick={buttonOnClick}
    >
      {userState.isLoggedIn
        ? userState?.user.displayName
        : "GitHub ile giriş yap"}
    </Button>
  );
};

export { GitHubLoginButton };
