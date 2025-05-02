import { siteConfig } from "@/shared/config.ts";
import type { Result } from "./types.ts";

export async function fetcher<T>(relativePath: string): Promise<T | null> {
  const targetUrl = `${siteConfig.backendUri}${relativePath}`;
  const request = await fetch(targetUrl);

  if (request.status === 404) {
    return null;
  }

  const result = await request.json() as Result<T>;

  if (result.error !== undefined && result.error !== null) {
    throw new Error(result.error);
  }

  return result.data;
}
