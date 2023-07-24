import { type ProfileMembership } from "@shared/profile-membership.ts";
import { type Database } from "@shared/supabase-database-types.ts";
import { type UserQueryResult, userQueryToUser } from "./user-query-to-user.ts";

type ProfileMembershipTableRow =
  Database["public"]["Tables"]["ProfileMembership"]["Row"];

interface ProfileMembershipQueryResult extends ProfileMembershipTableRow {
  User: UserQueryResult;
}

const profileMembershipQueryToProfileMembership = (
  source: ProfileMembershipQueryResult,
): ProfileMembership | null => {
  if (source === null) {
    return null;
  }

  return {
    id: source.id,
    role: source.role,
    user: userQueryToUser(source.User),
  };
};

export { profileMembershipQueryToProfileMembership };
