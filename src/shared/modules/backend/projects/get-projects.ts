import { fetcher } from "@/shared/modules/backend/fetcher.ts";

import type { Project } from "./types.ts";

export type GetProjectsData = Project[];

export async function getProjects(id: string, locale: string) {
  const response = await fetcher<GetProjectsData>(`/${locale}/projects/${id}`);

  return response;
}
