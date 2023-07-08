import { isCuid } from "@cuid";
import { assert, assertExists } from "@std/testing/asserts.ts";

import { getSupabaseClientMock } from "../_shared/supabase-client-mock.ts";
import { profileCreate } from "./mod.ts";

Deno.test("create user", async () => {
  const profile = {
    // id: createId(),
    type: "Individual" as const,
    slug: "eser",
    profilePictureUri: null,

    translations: {
      "tr": {
        title: "Eser Ozvataf",
        description: "desc",
      },
    },
  };

  const supabase = getSupabaseClientMock();
  const result = await profileCreate(supabase, profile, "tr");

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});
