import { compileMDX } from "next-mdx-remote/rsc";

const mdx = async (source: string) => {
  const result = await compileMDX({
    source: source,
    options: { parseFrontmatter: true },
  });

  return result;
};

export { mdx };
