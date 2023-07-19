import {
  type IndividualListResult,
  type ProfileList,
} from "@shared/individual-list-result.ts";

import { profileQueryToProfile } from "../_shared/profile/profile-query-to-profile.ts";
import { type SupabaseClient } from "../_shared/supabase-client.ts";

const individualList = async (supabase: SupabaseClient, lang: string) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("type", "Individual")
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null);

  const profiles = profileQueryResponse.data?.map((profile) =>
    profileQueryToProfile(profile)
  );

  const result: IndividualListResult = {
    payload: profiles as ProfileList,
  };

  return result;
};

export { individualList };
