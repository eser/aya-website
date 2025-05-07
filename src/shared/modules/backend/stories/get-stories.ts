import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoriesData = (Omit<Story, "author_profile_id"> & {
  author_profile: {
    id: string;
    slug: string;
    title: string;
  };
})[];

export async function getStories(id: string, locale: string) {
  const response = await fetcher<GetStoriesData>(`/${locale}/stories/${id}`);

  return response;
}
