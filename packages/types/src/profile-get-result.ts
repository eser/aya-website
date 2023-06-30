import { type ResultType } from "./result-type.ts";
import { type Profile } from "./profile.ts";
import { type ProfilePage, type ProfilePageList } from "./profile-page.ts";

interface ProfileGetComposition {
  profile: Profile;
  pages: ProfilePageList;
}

type ProfileGetResult = ResultType<ProfileGetComposition | null>;

export {
  type ProfileGetComposition,
  type ProfileGetResult,
  type Profile,
  type ProfilePage,
  type ProfilePageList,
};
