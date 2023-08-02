import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { productList } from "./mod.ts";

const supabase = getSupabaseClient();

Deno.test("call product list", async () => {
  const result = await productList(supabase, "tr");
  assertExists(result.payload);
});
