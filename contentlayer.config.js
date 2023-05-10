import { defineDocumentType, makeSource } from "contentlayer/source-files";

import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import fauxRemarkEmbedder from "@remark-embedder/core";
import fauxOembedTransformer from "@remark-embedder/transformer-oembed";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;

const handleHTML = (html, info) => {
  const { url, transformer } = info;

  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div class="embed-youtube">${html}</div>`;
  }

  return html;
};

const StaticPage = defineDocumentType(() => ({
  name: "StaticPage",
  filePathPattern: `static/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the static page",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the static page",
      required: true,
    },
    description: { type: "string", required: false },
    cover: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        // const [, filename, _fileext] = /static\/(.*)\.(\w+)$/.exec(
        const [, filename] = /static\/(.*)$/.exec(
          doc._raw.flattenedPath,
        );

        return `/${filename}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [StaticPage],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [remarkEmbedder, { transformers: [oembedTransformer], handleHTML }],
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
    ],
  },
});

export { source, source as default, StaticPage };
