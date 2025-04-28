import type { ResultType } from "./result-type.ts";
import type { Profile } from "./profile.ts";
import type { ProfileLinkList } from "./profile-link.ts";
import type { ProfilePageList } from "./profile-page.ts";

export type { Profile, ProfileType } from "./profile.ts";
export type { ProfileLink, ProfileLinkList } from "./profile-link.ts";
export type { ProfilePage, ProfilePageList } from "./profile-page.ts";

export interface ProfileGetComposition {
  profile: Profile;
  links: ProfileLinkList | undefined;
  pages: ProfilePageList | undefined;
  // stories: ProfileStoryList;
}

export type ProfileGetResult = ResultType<ProfileGetComposition | null>;
