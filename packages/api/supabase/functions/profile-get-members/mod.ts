import { z } from "@zod";
import {
  type ProfileGetMembersResult,
} from "@shared/profile-get-members-result.ts";

import { profileQueryToProfile } from "../_shared/profile/profile-query-to-profile.ts";
import { profileMembershipQueryToProfileMembership } from "../_shared/profile/profile-membership-query-to-profile-membership.ts";
import { type SupabaseClient } from "../_shared/supabase-client.ts";

const profileGetMembers = async (
  supabase: SupabaseClient,
  slug: string,
  lang: string,
) => {
  const slugValidated = await z.string().parseAsync(slug);

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("slug", slugValidated)
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null)
    .limit(1)
    .maybeSingle();
  // .returns<Profile>();

  const profile = profileQueryToProfile(profileQueryResponse.data);

  if (profile === null) {
    const result: ProfileGetMembersResult = {
      payload: null,
      error: {
        message: `Profile not found for slug: ${slug}`,
      },
    };

    return result;
  }

  const profileMembershipQueryResponse = await supabase
    .from("ProfileMembership")
    .select("*, User(*, UserTx(*), Profile(*, ProfileTx(*)))")
    .eq("profileId", profile.id)
    .eq("User.Profile.ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("User.deletedAt", null)
    .is("User.Profile.deletedAt", null)
    .is("User.Profile.ProfileTx.deletedAt", null);

  const members = profileMembershipQueryResponse.data?.map((x) =>
    profileMembershipQueryToProfileMembership(x)!
  );

  const result: ProfileGetMembersResult = {
    payload: {
      profile: profile,
      members: members,
    },
  };

  return result;
};

export { profileGetMembers };
