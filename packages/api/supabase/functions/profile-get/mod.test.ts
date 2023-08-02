import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { profileGet } from "./mod.ts";

const supabase = getSupabaseClient();

Deno.test("call profil get", async () => {
  const result = await profileGet(supabase, "eser", "tr");
  assertExists(result.payload);
});
