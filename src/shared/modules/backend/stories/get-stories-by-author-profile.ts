import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Story } from "./types.ts";

export type GetStoriesData = (Omit<Story, "author_profile_id"> & {
  author_profile: {
    id: string;
    slug: string;
    title: string;
  };
})[];

export async function getStoriesByAuthorProfile(slug: string, locale: string) {
  const response = await fetcher<GetStoriesData>(`/${locale}/profiles/${slug}/stories`);

  return response;
}
