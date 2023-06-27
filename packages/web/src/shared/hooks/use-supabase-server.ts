import { createServerSupabaseClient } from "@/shared/lib/supabase-server";

const useSupabaseServer = () => {
  const supabase = createServerSupabaseClient();

  return { supabase };
};

export { useSupabaseServer };
