import type { ResultType } from "./result-type.ts";
import type { Profile } from "./profile.ts";
import type { ProfileMembershipList } from "./profile-membership.ts";

export type { Profile, ProfileType } from "./profile.ts";
export type { ProfileMembership, ProfileMembershipList } from "./profile-membership.ts";

export interface ProfileGetMembersComposition {
  profile: Profile;
  members: ProfileMembershipList | undefined;
}

export type ProfileGetMembersResult = ResultType<ProfileGetMembersComposition | null>;
