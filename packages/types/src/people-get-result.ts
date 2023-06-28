import { type ResultType } from "./result-type.ts";
import { type Profile } from "./profile.ts";
import { type ProfilePage, type ProfilePageList } from "./profile-page.ts";

interface PeopleGetComposition {
  profile: Profile;
  pages: ProfilePageList;
}

type PeopleGetResult = ResultType<PeopleGetComposition | null>;

export {
  type PeopleGetComposition,
  type PeopleGetResult,
  type Profile,
  type ProfilePage,
  type ProfilePageList,
};
