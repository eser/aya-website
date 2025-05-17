import { getCustomDomain } from "./profiles/get-custom-domain.ts";
import { getProfilesByKinds } from "./profiles/get-profiles-by-kind.ts";
import { getProfile } from "./profiles/get-profile.ts";
import { getProfilePage } from "./profiles/get-profile-page.ts";
import { getProfileMemberships } from "./profiles/get-profile-memberships.ts";
import { getStory } from "./stories/get-story.ts";
import { getStoriesByAuthorProfile } from "./stories/get-stories-by-author-profile.ts";
import { getSpotlight } from "./profiles/get-spotlight.ts";

export const backend = {
  getCustomDomain,
  getProfilesByKinds,
  getProfile,
  getProfilePage,
  getProfileMemberships,
  getStory,
  getStoriesByAuthorProfile,
  getSpotlight,
};
