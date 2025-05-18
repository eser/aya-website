import * as React from "react";

import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";
import prettyCode from "rehype-pretty-code";

import { CodeBlock } from "@/shared/components/userland/code-block/code-block.tsx";

export async function mdx(source: string, components?: MDXRemoteProps["components"]) {
  const result = await compileMDX({
    source: source,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [prettyCode],
        format: "mdx",
      },

      parseFrontmatter: true,
    },
    components: {
      h1: (props) => <h2 {...props} />,
      h2: (props) => <h3 {...props} />,
      h3: (props) => <h4 {...props} />,
      h4: (props) => <h5 {...props} />,
      h5: (props) => <h6 {...props} />,
      pre: (props) => <CodeBlock {...props} />,
      ...components,
    },
  });

  return result;
}
