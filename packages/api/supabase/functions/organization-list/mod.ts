import {
  type OrganizationListResult,
  type ProfileList,
} from "@shared/organization-list-result.ts";

import { profileQueryToProfile } from "../_shared/profile/profile-query-to-profile.ts";
import { type SupabaseClient } from "../_shared/supabase-client.ts";

const organizationList = async (supabase: SupabaseClient, lang: string) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("type", "Organization")
    .eq("isHidden", false)
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null);

  const profiles = profileQueryResponse.data?.map((profile) =>
    profileQueryToProfile(profile)
  );

  const result: OrganizationListResult = {
    payload: profiles as ProfileList,
  };

  return result;
};

export { organizationList };
