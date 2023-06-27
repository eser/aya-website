"use client";

import { useCallback } from "react";

import { useSupabaseAuth } from "@/shared/hooks/use-supabase-auth.ts";

import { Button } from "@/shared/components/ui/button.tsx";

// // eslint-disable-next-line @typescript-eslint/no-empty-function
const GitHubLogin = () => {
  const auth = useSupabaseAuth();

  const isLoggedIn = auth.session?.user !== undefined;

  const onClick = useCallback(
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
      className="flex items-center justify-center gap-2"
    >
      {auth.isLoading}
      {isLoggedIn
        ? <span>{auth.session?.user.user_metadata.full_name}</span>
        : <span>Sign in w/ GitHub</span>}
    </Button>
  );
};

export { GitHubLogin };
