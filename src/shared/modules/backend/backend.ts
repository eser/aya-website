import { getUsers } from "./users/get-users.ts";
import { getUser } from "./users/get-user.ts";
import { getProfiles } from "./profiles/get-profiles.ts";
import { getProfile } from "./profiles/get-profile.ts";
import { getStories } from "./stories/get-stories.ts";
import { getStory } from "./stories/get-story.ts";

export const backend = {
  getUsers,
  getUser,
  getProfiles,
  getProfile,
  getStories,
  getStory,
};
