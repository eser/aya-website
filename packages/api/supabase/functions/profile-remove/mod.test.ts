import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects, assertEquals, assertFalse } from "@std/assert/mod.ts";

import { profileRemove } from "./mod.ts";
import { profileCreate } from "../profile-create/mod.ts";
import { profileGetMembers } from "../profile-get-members/mod.ts";

const supabase = getSupabaseClient();

Deno.test("profile remove test", async () => {
  const profileId = createId();

  const profile = {
    id: profileId,
    type: "Individual" as const,
    slug: "eserCreatedForRemove"+profileId,
    profilePictureUri: null, // TODO

    showStories: true,
    showMembers: false,

    translations: {
      "tr": {
        title: "Eser Ozvataf",
        description: "aciklama",
      },
      "en": {
        title: "Eser Ozvataf",
        description: "description",
      },
    },
  };

  const createResult = await profileCreate(supabase, profile, "tr");

  assertExists(createResult?.payload?.profile?.id);
  assert(isCuid(createResult.payload.profile.id));

  const removeResult:any = await profileRemove(supabase, "eserCreatedForRemove"+profileId);
  assertEquals(removeResult?.payload,null);

  const getMembersResult = await profileGetMembers(supabase, "eserCreatedForRemove"+profileId, "tr");
  assertEquals(getMembersResult?.payload?.profile?.id, undefined);

});
