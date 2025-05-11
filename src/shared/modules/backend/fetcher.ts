import { type SiteConfig, siteConfig } from "@/shared/config.ts";
import type { Result } from "./types.ts";

export async function fetcher<T>(relativePath: string): Promise<T | null> {
  const latestConfig = ("siteConfig" in globalThis)
    // @ts-expect-error globalThis is not typed
    ? (globalThis.siteConfig as SiteConfig)
    : siteConfig;

  const targetUrl = `${latestConfig.backendUri}${relativePath}`;
  // console.log("targetUrl", targetUrl);
  const request = await fetch(targetUrl);

  if (request.status === 404) {
    return null;
  }

  const result = (await request.json()) as Result<T>;

  if (result.error !== undefined && result.error !== null) {
    throw new Error(result.error);
  }

  return result.data;
}
