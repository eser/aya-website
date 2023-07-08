import { isCuid } from "@cuid";
import { assert, assertExists } from "@std/testing/asserts.ts";

import { getMockDependencies } from "../_shared/wrapper.ts";
import { fn } from "./index.ts";

Deno.test("should return a payload", async () => {
  const mockRequestBody = {
    profile: {
      // id: profile.id ?? createId(),
      type: "Individual",
      slug: "eser",
      title: "Eser Ozvataf",
      description: "desc",
      profilePictureUri: null,
    },
  };

  const mockRequest = {
    json: () => Promise.resolve(mockRequestBody),
  } as unknown as Request;

  const mockDependencies = getMockDependencies();
  const result = await fn(mockRequest, mockDependencies);

  // assertEquals(result, {
  //   payload: {
  //     profile: mockProfile,
  //     links: [],
  //     pages: [],
  //   },
  // });

  assertExists(result?.payload?.profile?.id);
  assert(isCuid(result.payload.profile.id));
});
