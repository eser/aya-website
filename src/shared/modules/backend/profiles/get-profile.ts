import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Profile } from "./types.ts";

export async function getProfile(slug: string) {
  const response = await fetcher<Profile>(`/profiles/${slug}`);

  return response;
}
