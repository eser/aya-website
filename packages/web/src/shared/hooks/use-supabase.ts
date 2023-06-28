import { useContext } from "react";

import {
  
  SupabaseContext,
} from "@/shared/contexts/supabase-provider";

const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }

  return context;
};

export { useSupabase };

export {type Session} from "@/shared/contexts/supabase-provider";
