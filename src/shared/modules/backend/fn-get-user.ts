import { fetcher } from "@/shared/modules/fetcher/fetcher.ts";

export async function getUser(slug: string) {
  const response = await fetcher(`/users/${slug}`);

  return response;
}
