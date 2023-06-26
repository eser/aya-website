import { useContext } from "react";

import {
  type Session,
  SupabaseContext,
} from "@/shared/contexts/supabase-provider";

const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }

  return context;
};

export { type Session, useSupabase };
