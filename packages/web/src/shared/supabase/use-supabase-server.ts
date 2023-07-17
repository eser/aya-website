import { createServerSupabaseClient } from "./supabase-server.ts";

const getSupabaseServer = () => {
  const supabase = createServerSupabaseClient();

  return { supabase };
};

export { getSupabaseServer };
