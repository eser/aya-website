import * as runtime from "react/jsx-dev-runtime"; // Development.
// import * as runtime from "react/jsx-runtime"; // Production.

import * as MDX from "@mdx-js/mdx";

const getMDXComponent = async (source: string): Promise<JSX.Element> => {
  const compiled = await MDX.compile(source, {
    outputFormat: "function-body",
    development: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result = await MDX.run(compiled, runtime);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return result.default as JSX.Element;
};

export { getMDXComponent };
