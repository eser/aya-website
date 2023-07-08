import {
  createPagesBrowserClient,
  type Session,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { type Database } from "types/src/supabase-database-types.ts";

const createClientSupabaseClient = () => createPagesBrowserClient<Database>();

export { createClientSupabaseClient, type Session, type SupabaseClient };
