import {
  type CommunityListResult,
  type ProfileList,
} from "@types/community-list-result.ts";

import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";

const fn = async (req: Request, { supabase }: Dependencies) => {
  const { lang = config.defaultLanguage } = await req.json();

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("type", "Organization")
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null);

  const result: CommunityListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
