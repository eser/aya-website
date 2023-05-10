import { registry } from "./registry";

describe("di/registry", () => {
  test("basic", async () => {
    registry.setValue("a", 5);

    expect(registry.get("a")).toEqual(5);
  });
});
