import type { Result } from "@/shared/modules/backend/types.ts";
import mockdata from "@/app/contract/mocks/data.json" with { type: "json" };

type RequestInfo = {
  params: Promise<{
    slugs: [string, ...Array<string | undefined>];
  }>;
};

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const [entityName, identifier] = params.slugs;

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

  if (identifier === undefined) {
    result = {
      data: entityDictionary,
    };
  } else {
    if (!(identifier in entityDictionary)) {
      return Response.json(
        {
          data: null,
          error: `Not found: ${identifier}`,
        } satisfies Result<unknown>,
        {
          status: 404,
        },
      );
    }

    result = {
      data: entityDictionary[identifier],
    };
  }

  return Promise.resolve(Response.json(result, {
    status: 200,
  }));
}
