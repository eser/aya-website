import { getCustomDomain } from "./profiles/get-custom-domain.ts";
import { getProfilesByKind } from "./profiles/get-profiles-by-kind.ts";
import { getProfile } from "./profiles/get-profile.ts";
import { getProfilePage } from "./profiles/get-profile-page.ts";
import { getProfileMemberships } from "./profiles/get-profile-memberships.ts";
import { getStoriesByAuthorProfile } from "./stories/get-stories-by-author-profile.ts";

export const backend = {
  getCustomDomain,
  getProfilesByKind,
  getProfile,
  getProfilePage,
  getProfileMemberships,
  getStoriesByAuthorProfile,
};
