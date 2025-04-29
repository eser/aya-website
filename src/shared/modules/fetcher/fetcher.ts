export async function fetcher(relativePath: string) {
  // deno-lint-ignore no-process-global
  const targetUrl = `${process.env.NEXT_PUBLIC_BACKEND_URI}${relativePath}`;

  const request = await fetch(targetUrl);

  return request.json();
}
