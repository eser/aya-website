class AssertionError extends Error {
  override name = "AssertionError";

  constructor(message = "") {
    super(message);
  }
}

// unfortunately, typescript doesn't support this syntax yet
// see: https://github.com/microsoft/TypeScript/issues/34523

// const assert = (expr: unknown, msg = ""): asserts expr => {
//   if (!expr) {
//     throw new AssertionError(msg);
//   }
// };

// eslint-disable-next-line func-style
function assert(expr: unknown, msg = ""): asserts expr {
  if (!expr) {
    throw new AssertionError(msg);
  }
}

export { assert, AssertionError };
