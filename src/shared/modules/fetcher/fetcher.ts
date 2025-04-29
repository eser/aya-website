import process from "node:process";

export async function fetcher(relativePath: string) {
  const targetUrl = `${process.env.BACKEND_URI}${relativePath}`;

  const request = await fetch(targetUrl);

  return request.json();
}
