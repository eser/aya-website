import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Profile } from "./types.ts";

export type GetProfileData = Profile;

export async function getProfile(slug: string) {
  const response = await fetcher<GetProfileData>(`/profiles/${slug}`);

  return response;
}
