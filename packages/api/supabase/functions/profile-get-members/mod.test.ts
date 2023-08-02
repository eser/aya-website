import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { profileGetMembers } from "./mod.ts";

const supabase = getSupabaseClient();

Deno.test("call profil get members", async () => {
  const result = await profileGetMembers(supabase, "eser", "tr");
  assertExists(result.payload);
});
