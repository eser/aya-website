import { assertEquals } from "@std/testing/asserts.ts";

import { getMockDependencies } from "../_shared/wrapper.ts";
import { fn } from "./index.ts";

Deno.test("should return a payload", async () => {
  const mockRequest = {
    json: () => Promise.resolve({ name: "Test User" }),
  } as unknown as Request;

  const mockDependencies = getMockDependencies();
  const result = await fn(mockRequest, mockDependencies);

  assertEquals(result, {
    message: "Hello Test User!",
    data: {
      user: null,
    },
  });
});
