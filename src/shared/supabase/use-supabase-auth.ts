import * as React from "react";

import { SupabaseAuthContext } from "./supabase-auth-provider.tsx";

export const useSupabaseAuth = () => {
  const context = React.useContext(SupabaseAuthContext);

  if (context === undefined) {
    throw new Error(
      "useSupabaseAuth must be used within a SupabaseAuthProvider",
    );
  }

  return context;
};
