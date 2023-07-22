import { loadEnv } from "@hex/lib/options/env.ts";
import {
  getSupabaseClient,
} from "./supabase/functions/_shared/supabase-client.ts";
import { profileCreate } from "./supabase/functions/profile-create/mod.ts";
import { profileGet } from "./supabase/functions/profile-get/mod.ts";
import { profileRemove } from "./supabase/functions/profile-remove/mod.ts";

const init = async () => {
  const env = await loadEnv();

  const supabase = getSupabaseClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

  return {
    env,
    supabase,
  };
};

const { env, supabase } = await init();
