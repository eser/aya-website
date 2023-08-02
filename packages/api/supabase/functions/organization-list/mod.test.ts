import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { organizationList } from "./mod.ts";

const supabase = getSupabaseClient();

Deno.test("call organization list", async () => {
  const result = await organizationList(supabase, "tr");
  assertExists(result.payload);
});
