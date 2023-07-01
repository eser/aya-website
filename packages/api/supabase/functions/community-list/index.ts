import { wrapper } from "../_shared/wrapper.ts";
import {
  type CommunityListResult,
  type ProfileList,
} from "@types/community-list-result.ts";

wrapper(async (_req, { supabase }) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Organization")
    .is("deletedAt", null);

  const result: CommunityListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
});
