import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Topic = defineDocumentType(() => ({
  name: 'Topic',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (topic) => `/product/${topic.slug}` },
  },
}))

export default makeSource({ contentDirPath: 'topics', documentTypes: [Topic] })
