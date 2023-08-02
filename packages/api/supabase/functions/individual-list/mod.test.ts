import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { individualList } from "./mod.ts";

const supabase = getSupabaseClient();

Deno.test("call individual list", async () => {
  const result = await individualList(supabase, "tr");
  assertExists(result.payload);
});
