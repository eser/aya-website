import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoriesData = Story[];

export async function getStories(locale: string) {
  const response = await fetcher<GetStoriesData>(`/${locale}/stories`);

  return response;
}
