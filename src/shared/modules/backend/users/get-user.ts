import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { User } from "./types.ts";

export type GetUserData = User;

export async function getUser(id: string, locale: string) {
  const response = await fetcher<GetUserData>(`/users/${id}?locale=${locale}`);

  return response;
}
