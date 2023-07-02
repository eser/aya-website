import { type Dependencies, wrapper } from "../_shared/wrapper.ts";
import {
  type PeopleListResult,
  type ProfileList,
} from "@types/people-list-result.ts";

const fn = async (_req: Request, { supabase }: Dependencies) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Individual")
    .is("deletedAt", null);

  const result: PeopleListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
};

if (import.meta.main) {
  wrapper(fn);
}

export { fn };
