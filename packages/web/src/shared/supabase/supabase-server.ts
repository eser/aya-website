import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "types/src/supabase-database-types.ts";

const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export { createServerSupabaseClient };
