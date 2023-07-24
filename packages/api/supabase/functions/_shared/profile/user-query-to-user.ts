import { type User } from "@shared/user.ts";
import { type Database } from "@shared/supabase-database-types.ts";
import {
  type ProfileQueryResult,
  profileQueryToProfile,
} from "./profile-query-to-profile.ts";

type UserTableRow = Database["public"]["Tables"]["User"]["Row"];
type UserTxTableRow = Database["public"]["Tables"]["UserTx"]["Row"];

interface UserQueryResult extends UserTableRow {
  UserTx: Array<UserTxTableRow>;
  Profile: ProfileQueryResult;
}

const userQueryToUser = (source: UserQueryResult): User | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    // email: source.email,
    fullname: source.UserTx?.[0]?.fullnameTx ?? "(untranslated)",
    bio: source.UserTx?.[0]?.bioTx ?? "(untranslated)",
    profilePictureUri: source.profilePictureUri,
    githubHandle: source.githubHandle,
    twitterHandle: source.twitterHandle,

    individualProfile: profileQueryToProfile(source.Profile) ?? null,
  };
};

export { type UserQueryResult, userQueryToUser };
