import { getCustomDomain } from "./profiles/get-custom-domain.ts";
import { getUsers } from "./users/get-users.ts";
import { getUser } from "./users/get-user.ts";
import { getProfiles } from "./profiles/get-profiles.ts";
import { getProfile } from "./profiles/get-profile.ts";
import { getProfilePage } from "./profiles/get-profile-page.ts";
import { getStories } from "./stories/get-stories.ts";

export const backend = {
  getCustomDomain,
  getUsers,
  getUser,
  getProfiles,
  getProfile,
  getProfilePage,
  getStories,
};
