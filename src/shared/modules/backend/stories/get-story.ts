import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoryData = Story;

export async function getStory(slug: string) {
  const response = await fetcher<GetStoryData>(`/stories/${slug}`);

  return response;
}
