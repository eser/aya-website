import { fetcher } from "@/shared/modules/fetcher/fetcher.ts";

export async function getUsers() {
  const response = await fetcher("/users");

  return response;
}
