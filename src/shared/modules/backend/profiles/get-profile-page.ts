import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { ProfilePage } from "./types.ts";

export type GetProfilePageData = Omit<ProfilePage, "order" | "created_at" | "updated_at" | "deleted_at">;

export async function getProfilePage(id: string, locale: string) {
  const response = await fetcher<GetProfilePageData>(`/${locale}/profile-pages/${id}`);

  return response;
}
