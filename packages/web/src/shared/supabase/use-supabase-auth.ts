import { useContext } from "react";

import { SupabaseAuthContext } from "./supabase-auth-provider.tsx";

const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);

  if (context === undefined) {
    throw new Error(
      "useSupabaseAuth must be used within a SupabaseAuthProvider",
    );
  }

  return context;
};

export { useSupabaseAuth };
