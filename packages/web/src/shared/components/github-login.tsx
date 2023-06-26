import * as React from "react";

import { Button } from "@/shared/components/ui/button.tsx";

// // eslint-disable-next-line @typescript-eslint/no-empty-function
// const signInWithGitHub = () => {
//   // TODO(@eser) implement github login
// };

const GitHubLogin = () => {
  return (
    <Button
      // onClick={() => signInWithGitHub()}
      className="flex items-center justify-center gap-2"
    >
      <span>Sign in w/ GitHub</span>
    </Button>
  );
};

export { GitHubLogin };
