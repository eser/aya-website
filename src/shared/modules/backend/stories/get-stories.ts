import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export async function getStories() {
  const response = await fetcher<Story[]>("/stories");

  return response;
}
