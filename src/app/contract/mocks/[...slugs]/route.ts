import type { Result } from "@/shared/modules/backend/types.ts";
import mockdata from "@/app/contract/mocks/data.json" with { type: "json" };

type RequestInfo = {
  params: Promise<{
    slugs: [string, string, ...Array<string | undefined>];
  }>;
};

function getEntityDictionary(entityName: string, localeCode: string) {
  const entityNameLocalized = `${entityName}.${localeCode}`;

  if (entityNameLocalized in mockdata) {
    // @ts-expect-error mockdata is not typed
    return mockdata[entityNameLocalized];
  }

  if (entityName in mockdata) {
    // @ts-expect-error mockdata is not typed
    return mockdata[entityName];
  }

  return null;
}

export async function GET(_req: Request, info: RequestInfo): Promise<Response> {
  const params = await info.params;

  const [localeCode, entityName, identifier] = params.slugs;

  const entityDictionary = getEntityDictionary(entityName, localeCode);

  if (entityDictionary === null) {
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

  return Promise.resolve(
    Response.json(result, {
      status: 200,
    }),
  );
}
