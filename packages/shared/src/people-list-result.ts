import { type ResultType } from "./result-type.ts";
import { type Profile, type ProfileList } from "./profile.ts";

type PeopleListResult = ResultType<ProfileList>;

export { type PeopleListResult, type Profile, type ProfileList };
