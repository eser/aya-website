import {
  createPagesBrowserClient,
  type Session,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";

import { type Database } from "@/shared/types/database";

const createClientSupabaseClient = () => createPagesBrowserClient<Database>();

export { createClientSupabaseClient, type Session, type SupabaseClient };
