import { type ResultType } from "./result-type.ts";
import { type Profile, type ProfileType } from "./profile.ts";
import { type ProfileLink, type ProfileLinkList } from "./profile-link.ts";
import { type ProfilePage, type ProfilePageList } from "./profile-page.ts";

interface ProfileGetComposition {
  profile: Profile;
  links: ProfileLinkList;
  pages: ProfilePageList;
  // stories: ProfileStoryList;
}

type ProfileGetResult = ResultType<ProfileGetComposition | null>;

export {
  type Profile,
  type ProfileGetComposition,
  type ProfileGetResult,
  type ProfileLink,
  type ProfileLinkList,
  type ProfilePage,
  type ProfilePageList,
  type ProfileType,
};
