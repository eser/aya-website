import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Profile } from "./types.ts";

export type GetProfilesData = Profile[];

export async function getProfiles() {
  const response = await fetcher<GetProfilesData>("/profiles");

  return response;
}
