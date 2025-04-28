import { type User } from "./user.ts";

export type ProfileMembershipRole =
  | "Owner"
  | "Lead"
  | "Maintainer"
  | "Contributor"
  | "Sponsor"
  | "Follower";

export type ProfileMembership = {
  id: string;
  role: ProfileMembershipRole;
  user: User | null;
};

export type ProfileMembershipList = Array<ProfileMembership>;
