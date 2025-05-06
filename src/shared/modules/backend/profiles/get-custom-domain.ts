import { fetcher } from "@/shared/modules/backend/fetcher.ts";

export type GetCustomDomainData = {
  profile_slug: string;
};

export async function getCustomDomain(domain: string) {
  const response = await fetcher<GetCustomDomainData>(`/en/custom-domains/${domain}`);

  return response;
}
