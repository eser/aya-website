import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Profile } from "./types.ts";

export async function getProfiles() {
  const response = await fetcher<Profile[]>("/profiles");

  return response;
}
