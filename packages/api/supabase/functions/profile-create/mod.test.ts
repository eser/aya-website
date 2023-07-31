import { getSupabaseClient } from "@functions/_shared/supabase-client.ts";
import { createId, isCuid } from "@cuid";
import { ZodError } from "@zod";
import { assert, assertExists, assertRejects } from "@std/assert/mod.ts";

import { getSupabaseClientMock } from "../_shared/supabase-client-mock.ts";
import { profileCreate } from "./mod.ts";
import { profileRemove } from "../profile-remove/mod.ts";

const supabase = getSupabaseClient();

Deno.test("create user with all fields", async () => {
  const profileId = createId();

  const profile = {
    id: profileId,
    type: "Individual" as const,
    slug: "eserCreatedWithAllFields",
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

  const result = await profileCreate(supabase, profile, "tr");

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});

Deno.test("create user with missing optional fields", async () => {
  const profile = {
    type: "Individual" as const,
    slug: "eserCreatedWithMissingOptionalFields",
    profilePictureUri: null, // TODO

    translations: {
      "tr": {
        title: "Eser Ozvataf",
        description: "aciklama",
      },
    },
  };

  const result = await profileCreate(supabase, profile, "tr");

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});

Deno.test("create user with invalid profilePictureUri", async () => {
  const profile = {
    type: "Individual" as const,
    slug: "eserCreatedWithInvalidProfilePictureUri",
    profilePictureUri: "invalid-uri",

    translations: {
      "tr": {
        title: "Eser Ozvataf",
        description: "aciklama",
      },
    },
  };

  await assertRejects<ZodError>(
    () => profileCreate(supabase, profile, "tr"),
    ZodError,
    "Invalid url",
  );
});

Deno.test("create user with invalid translation", async () => {
  const profile = {
    // id: createId(),
    type: "Individual" as const,
    slug: "eserCreatedWithInvalidTranslation",
    profilePictureUri: null, // TODO

    translations: {
      "tr": {
        // id: createId(),
        title: "Eser Ozvataf",
        description: (123 as unknown as string), // invalid type
      },
    },
  };

  await assertRejects<ZodError>(
    () => profileCreate(supabase, profile, "tr"),
    ZodError,
    "Expected string, received number",
  );
});

Deno.test("remove test users", async () => {
  await profileRemove(supabase, "eserCreatedWithAllFields");
  await profileRemove(supabase, "eserCreatedWithMissingOptionalFields");
  await profileRemove(supabase, "eserCreatedWithInvalidProfilePictureUri");
  await profileRemove(supabase, "eserCreatedWithInvalidProfilePictureUri");
});
