import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoryData = Story;

export async function getStory(slug: string, locale: string) {
  const response = await fetcher<GetStoryData>(`/stories/${slug}?locale=${locale}`);

  return response;
}
