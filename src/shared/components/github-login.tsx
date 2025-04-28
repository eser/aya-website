"use client";

import * as React from "react";

import { useSupabaseAuth } from "@/shared/supabase/use-supabase-auth";
import { Button } from "@/shared/components/ui/button.tsx";

import styles from "./github-login.module.css";

// // eslint-disable-next-line @typescript-eslint/no-empty-function
export const GitHubLogin = () => {
  const auth = useSupabaseAuth();

  const isLoggedIn = auth.session?.user !== undefined;
  const onClick = React.useCallback(
    async () => {
      if (isLoggedIn) {
        await auth.signOut();
        return;
      }

      await auth.signInWithGithub();
    },
    [isLoggedIn, auth],
  );

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={onClick}
      className={styles.button}
      asChild
    >
      <div>
        {auth.isLoading}
        {isLoggedIn
          ? <span>{auth.session?.user.user_metadata.full_name}</span>
          : <span>GitHub ile Giriş Yap</span>}
      </div>
    </Button>
  );
};
