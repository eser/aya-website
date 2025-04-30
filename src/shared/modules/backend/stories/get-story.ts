import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export async function getStory(slug: string) {
  const response = await fetcher<Story>(`/stories/${slug}`);

  return response;
}
