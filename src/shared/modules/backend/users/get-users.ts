import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { User } from "./types.ts";

export async function getUsers() {
  const response = await fetcher<User[]>("/users");

  return response;
}
