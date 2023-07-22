import { z } from "@zod";
import { type ProfileRemoveResult } from "@shared/profile-remove-result.ts";

import { profileQueryToProfile } from "../_shared/profile/profile-query-to-profile.ts";
import { type SupabaseClient } from "../_shared/supabase-client.ts";

const profileRemove = async (
  supabase: SupabaseClient,
  slug: string,
) => {
  const slugValidated = await z.string().parseAsync(slug);

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("slug", slugValidated)
    .is("deletedAt", null)
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profile = profileQueryToProfile(profileQueryResponse.data);

  if (profile === null) {
    const result: ProfileRemoveResult = {
      payload: null,
      error: {
        message: `Profile not found for slug: ${slug}`,
      },
    };

    return result;
  }

  console.log("deleting memberships...");
  await Promise
    .allSettled([
      /* profile memberships query */
      supabase
        .from("ProfileMembership")
        .delete()
        .eq("profileId", profile.id)
        .is("deletedAt", null),
    ]);

  console.log("deleting translations...");
  await Promise
    .allSettled([
      /* profile links translations query */
      supabase
        .from("ProfileLinkTx")
        .delete()
        .eq("profileLink.profileId", profile.id)
        .is("deletedAt", null)
        .is("profileLink.deletedAt", null),
      /* profile pages translations query */
      supabase
        .from("ProfilePageTx")
        .delete()
        .eq("profilePage.profileId", profile.id)
        .is("deletedAt", null)
        .is("profilePage.deletedAt", null),
      /* profile stories translations query */
      supabase
        .from("ProfileStoryTx")
        .delete()
        .eq("profileStory.profileId", profile.id)
        .is("deletedAt", null)
        .is("profileStory.deletedAt", null),
      /* profile translations query */
      supabase
        .from("ProfileTx")
        .delete()
        .eq("profileId", profile.id)
        .is("deletedAt", null),
    ]);

  console.log("deleting related entities...");
  await Promise
    .allSettled([
      /* profile links query */
      supabase
        .from("ProfileLink")
        .delete()
        .eq("profileId", profile.id)
        .is("deletedAt", null),
      /* profile pages query */
      supabase
        .from("ProfilePage")
        .delete()
        .eq("profileId", profile.id)
        .is("deletedAt", null),
      /* profile stories query */
      supabase
        .from("ProfileStory")
        .delete()
        .eq("profileId", profile.id)
        .is("deletedAt", null),
      /* profile stories query */
      supabase
        .from("Profile")
        .delete()
        .eq("id", profile.id)
        .is("deletedAt", null),
    ]);

  const result: ProfileRemoveResult = {
    payload: null,
  };

  return result;
};

export { profileRemove };
