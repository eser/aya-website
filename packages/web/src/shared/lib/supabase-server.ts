import { cache } from "react";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { type Database } from "@/shared/types/database";

const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export { createServerSupabaseClient };
