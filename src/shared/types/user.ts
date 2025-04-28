import type { Profile } from "./profile.ts";

export type User = {
  id: string;
  // email: string;
  fullname: string;
  bio: string;
  profilePictureUri: string | null;
  githubHandle: string;
  twitterHandle: string;

  individualProfile: Profile | null;
};

export type UserList = Array<User>;
