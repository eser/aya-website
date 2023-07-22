import { isCuid, createId } from "@cuid";
import { assert, assertExists, assertThrows } from "@std/testing/asserts.ts";

import { getSupabaseClientMock } from "../_shared/supabase-client-mock.ts";
import { profileCreate } from "./mod.ts";

Deno.test("create user with all fields", async () => {
  const profileId = createId();

  const profile = {
    id: profileId,
    type: "Individual" as const,
    slug: "eser",
    profilePictureUri: null, // TODO

    translations: {
      "tr": {
        // id: createId(), // TODO
        title: "Eser Ozvataf",
        description: "aciklama",
      },
      "en": {
        // id: createId(), // TODO
        title: "Eser Ozvataf",
        description: "description",
      },
    },
  };

  const supabase = getSupabaseClientMock();
  const result = await profileCreate(supabase, profile, "tr");

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});

Deno.test("create user with missing optional fields", async () => {
  const profile = {
    // id: createId(),
    type: "Individual" as const,
    slug: "eser",
    profilePictureUri: null, // TODO

    translations: {
      "tr": {
        // id: createId(),
        title: "Eser Ozvataf",
        description: "aciklama",
      },
    },
  };

  const supabase = getSupabaseClientMock();
  const result = await profileCreate(supabase, profile, "tr");

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});

Deno.test("create user with invalid profilePictureUri", async () => {
  const profile = {
    // id: createId(),
    type: "Individual" as const,
    slug: "eser",
    profilePictureUri: "invalid-uri",

    translations: {
      "tr": {
        // id: createId(),
        title: "Eser Ozvataf",
        description: "aciklama",
      },
    },
  };

  const supabase = getSupabaseClientMock();

  await assertThrows(async () => {
    await profileCreate(supabase, profile, "tr");
  });
});

Deno.test("create user with invalid translation", async () => {
  const profile = {
    // id: createId(),
    type: "Individual" as const,
    slug: "eser",
    profilePictureUri: null, // TODO

    translations: {
      "tr": {
        // id: createId(),
        title: "Eser Ozvataf",
        description: (123 as unknown as string), // invalid type
      },
    },
  };

  const supabase = getSupabaseClientMock();

  await assertThrows(async () => {
    await profileCreate(supabase, profile, "tr");
  });
});
