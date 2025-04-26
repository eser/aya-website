import { type ResultType } from "./result-type.ts";
import { type Profile, type ProfileType } from "./profile.ts";
import {
  type ProfileMembership,
  type ProfileMembershipList,
} from "./profile-membership.ts";

interface ProfileGetMembersComposition {
  profile: Profile;
  members: ProfileMembershipList | undefined;
}

type ProfileGetMembersResult = ResultType<ProfileGetMembersComposition | null>;

export {
  type Profile,
  type ProfileGetMembersComposition,
  type ProfileGetMembersResult,
  type ProfileMembership,
  type ProfileMembershipList,
  type ProfileType,
};
