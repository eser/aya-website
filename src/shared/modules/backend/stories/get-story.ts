import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoryData = Story;

export async function getStory(storyslug: string, locale: string) {
  const response = await fetcher<Story>(`/${locale}/stories/${storyslug}`);

  return response;
}
