import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { User } from "./types.ts";

export async function getUser(id: string) {
  const response = await fetcher<User>(`/users/${id}`);

  return response;
}
