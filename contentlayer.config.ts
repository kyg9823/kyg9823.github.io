import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    summary: { type: "string", required: true },
    draft: {type: "boolean", required: false, default: false},
    tags: {type: "list", of: { type: "string"}, required: false }
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});