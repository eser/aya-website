import {
  type PeopleListResult,
  type ProfileList,
} from "@types/people-list-result.ts";

import { config, type Dependencies, wrapper } from "../_shared/wrapper.ts";

const fn = async (req: Request, { supabase }: Dependencies) => {
  const { lang = config.defaultLanguage } = await req.json();

  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*, ProfileTx(*)")
    .eq("type", "Individual")
    .eq("ProfileTx.languageCode", lang)
    .is("deletedAt", null)
    .is("ProfileTx.deletedAt", null);

  const result: PeopleListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
