import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Profile } from "./types.ts";

export type GetProfilesData = Profile[];

export async function getProfilesByKind(locale: string, kind: string) {
  const response = await fetcher<GetProfilesData>(
    `/${locale}/profiles?filter_kind=${kind}`,
  );

  return response;
}
