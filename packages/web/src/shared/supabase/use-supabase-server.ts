import { createServerSupabaseClient } from "./supabase-server.ts";

const useSupabaseServer = () => {
  const supabase = createServerSupabaseClient();

  return { supabase };
};

export { useSupabaseServer };
