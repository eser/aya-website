import type { Result } from "@/shared/modules/backend/types.ts";
import { generateFakeData } from "../data.ts";

type RequestInfo = {
  params: Promise<{
    slugs: [string, string, ...Array<string | undefined>];
  }>;
};

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const [localeCode, entityName, identifier] = params.slugs;
  const data = generateFakeData(localeCode, entityName, identifier);

  if (data === null) {
    return Response.json(
      {
        data: null,
        error: `Invalid entity: ${entityName}`,
      } satisfies Result<unknown>,
      {
        status: 400,
      },
    );
  }

  const result: Result<unknown> = {
    data: data,
  };

  return Promise.resolve(
    Response.json(result, {
      status: 200,
    }),
  );
}
