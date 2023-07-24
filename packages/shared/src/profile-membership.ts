import { type User } from "./user.ts";

type ProfileMembershipRole =
  | "Owner"
  | "Lead"
  | "Maintainer"
  | "Contributor"
  | "Sponsor"
  | "Follower";

type ProfileMembership = {
  id: string;
  role: ProfileMembershipRole;
  user: User | null;
};

type ProfileMembershipList = Array<ProfileMembership>;

export {
  type ProfileMembership,
  type ProfileMembershipList,
  type ProfileMembershipRole,
};
