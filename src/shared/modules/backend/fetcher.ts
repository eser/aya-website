import type { Result } from "./types.ts";

export async function fetcher<T>(relativePath: string) {
  // deno-lint-ignore no-process-global
  const targetUrl = `${process.env.NEXT_PUBLIC_BACKEND_URI}${relativePath}`;

  const request = await fetch(targetUrl);

  const result = await request.json() as Result<T>;

  if (result.error !== undefined && result.error !== null) {
    throw new Error(result.error);
  }

  return result.data;
}
