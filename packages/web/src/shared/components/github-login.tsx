"use client";

import { useCallback } from "react";

import { useSupabaseAuth } from "@/shared/hooks/use-supabase-auth.ts";

import { Button } from "@/shared/components/ui/button.tsx";

// // eslint-disable-next-line @typescript-eslint/no-empty-function
const GitHubLogin = () => {
  const { signInWithGithub, signOut, session } = useSupabaseAuth();

  const isLoggedIn = session?.user !== undefined;

  const onClick = useCallback(
    async () => {
      if (isLoggedIn) {
        await signOut();
        return;
      }

      await signInWithGithub();
    },
    [isLoggedIn, signInWithGithub, signOut],
  );

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={onClick}
      className="flex items-center justify-center gap-2"
    >
      {isLoggedIn
        ? <span>{session?.user.user_metadata.full_name}</span>
        : <span>Sign in w/ GitHub</span>}
    </Button>
  );
};

export { GitHubLogin };
