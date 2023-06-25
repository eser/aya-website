import { cache } from "react";

import {
  createPagesBrowserClient,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";

import { type Database } from "@/shared/types/database";

const createClientSupabaseClient = cache(() =>
  createPagesBrowserClient<Database>()
);

export { createClientSupabaseClient, type SupabaseClient };
