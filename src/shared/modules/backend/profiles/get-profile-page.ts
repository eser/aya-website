import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { ProfilePage } from "./types.ts";

export type GetProfilePageData = Omit<ProfilePage, "order" | "created_at" | "updated_at" | "deleted_at">;

export async function getProfilePage(id: string) {
  const response = await fetcher<GetProfilePageData>(`/profile-pages/${id}`);

  return response;
}
