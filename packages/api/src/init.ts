import { loadEnv } from "@hex/lib/options/env.ts";
import {
  getSupabaseClient,
} from "@functions/_shared/supabase-client.ts";
import { individualList } from "./supabase/functions/individual-list/mod.ts";
import { organizationList } from "./supabase/functions/organization-list/mod.ts";
import { productList } from "./supabase/functions/product-list/mod.ts";
import { profileCreate } from "./supabase/functions/profile-create/mod.ts";
import { profileGet } from "./supabase/functions/profile-get/mod.ts";
import { profileGetMembers } from "./supabase/functions/profile-get-members/mod.ts";
import { profileRemove } from "./supabase/functions/profile-remove/mod.ts";
import { venueList } from "./supabase/functions/venue-list/mod.ts";

const init = async () => {
  const env = await loadEnv();

  const supabase = getSupabaseClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

  return {
    env,
    supabase,
  };
};

const { env, supabase } = await init();
