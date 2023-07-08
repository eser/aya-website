import { createClient, type SupabaseClient } from "@supabase";

const getSupabaseClient = (
  url?: string,
  anonKey?: string,
  authorizationHeader?: string,
) => {
  const supabaseClient = createClient(
    // Supabase API URL - env var exported by default.
    url ?? Deno.env.get("SUPABASE_URL") ?? "",
    // Supabase API ANON KEY - env var exported by default.
    anonKey ?? Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    // Create client with Auth context of the user that called the function.
    // This way your row-level-security (RLS) policies are applied.
    {
      global: { headers: { Authorization: authorizationHeader! } },
    },
  );

  return supabaseClient;
};

const getSupabaseClientFromRequest = (req: Request) => {
  return getSupabaseClient(
    undefined,
    undefined,
    req.headers.get("Authorization") ?? undefined,
  );
};

export { getSupabaseClient, getSupabaseClientFromRequest, type SupabaseClient };
