import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";

const mdx = async (
  source: string,
  components?: MDXRemoteProps["components"],
) => {
  const result = await compileMDX({
    source: source,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
        format: "mdx",
      },

      parseFrontmatter: true,
    },
    components: components,
  });

  return result;
};

export { mdx };
