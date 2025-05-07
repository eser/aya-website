import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoriesData = Story[];

export async function getStories(id: string, locale: string) {
  const response = await fetcher<GetStoriesData>(`/${locale}/stories/${id}`);

  return response;
}
