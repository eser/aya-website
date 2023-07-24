import { type Profile } from "./profile.ts";

type User = {
  id: string;
  // email: string;
  fullname: string;
  bio: string;
  profilePictureUri: string | null;
  githubHandle: string;
  twitterHandle: string;

  individualProfile: Profile | null;
};

type UserList = Array<User>;

export { type User, type UserList };
