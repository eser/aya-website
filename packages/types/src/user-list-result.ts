import { type ResultType } from "./result-type.ts";

type User = {
  id: string;
  fullname: string;
};

type UserList = Array<User>;

type UserListResult = ResultType<UserList>;

export { type User, type UserList, type UserListResult };
