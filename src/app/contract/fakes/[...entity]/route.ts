import type { Result } from "@/shared/modules/backend/types.ts";
import { generateFakeData } from "../data.ts";

type RequestInfo = {
  params: Promise<{
    entity: string[];
  }>;
};

const validEntities = ["profiles", "users", "stories"];

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const entityName = params.entity[0];
  if (!validEntities.includes(entityName)) {
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

  let result: Result<unknown>;

  if (params.entity.length === 1) {
    result = {
      data: Array.from({ length: 10 }, () => generateFakeData(entityName)),
    };
  } else {
    result = {
      data: generateFakeData(entityName, params.entity[1]),
    };
  }

  return Promise.resolve(Response.json(result, {
    status: 200,
  }));
}
