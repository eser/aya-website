import type { Result } from "@/shared/modules/backend/types.ts";
import mockdata from "@/app/contract/mocks/data.json" with { type: "json" };

type RequestInfo = {
  params: Promise<{
    entity: string[];
  }>;
};

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const entityName = params.entity[0];
  if (!(entityName in mockdata)) {
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

  // @ts-expect-error mockdata is not typed
  const entityDictionary = mockdata[entityName];

  let result: Result<unknown>;

  if (params.entity.length === 1) {
    result = {
      data: entityDictionary,
    };
  } else {
    if (!(params.entity[1] in entityDictionary)) {
      return Response.json(
        {
          data: null,
          error: `Not found: ${params.entity[1]}`,
        } satisfies Result<unknown>,
        {
          status: 404,
        },
      );
    }

    result = {
      data: entityDictionary[params.entity[1]],
    };
  }

  return Promise.resolve(Response.json(result, {
    status: 200,
  }));
}
