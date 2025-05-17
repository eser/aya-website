import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { ProfileMembership } from "./types.ts";

export type GetProfileMembershipsData = ProfileMembership[];

export async function getProfileMemberships(locale: string, slug: string, profileKind: string) {
  const response = await fetcher<GetProfileMembershipsData>(
    `/${locale}/profiles/${slug}/memberships?filter_profile_kind=${profileKind}`,
  );

  return response;
}
