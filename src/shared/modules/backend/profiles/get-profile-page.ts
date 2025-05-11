import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { ProfilePage } from "./types.ts";

export type GetProfilePageData = Omit<ProfilePage, "order" | "created_at" | "updated_at" | "deleted_at">;

export async function getProfilePage(slug: string, pageslug: string, locale: string) {
  const response = await fetcher<GetProfilePageData>(`/${locale}/profiles/${slug}/pages/${pageslug}`);

  return response;
}
