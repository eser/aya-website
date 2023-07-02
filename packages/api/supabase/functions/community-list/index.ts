import { type Dependencies, wrapper } from "../_shared/wrapper.ts";
import {
  type CommunityListResult,
  type ProfileList,
} from "@types/community-list-result.ts";

const fn = async (_req: Request, { supabase }: Dependencies) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Organization")
    .is("deletedAt", null);

  const result: CommunityListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
