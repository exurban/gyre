import { format, parseISO } from 'date-fns'
import { allTopics } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allTopics.map((topic) => ({ slug: topic.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const topic = allTopics.find((topic) => topic.slug === params.slug)
  if (!topic) throw new Error(`Topic not found for slug: ${params.slug}`)
  return { title: topic.title }
}

const TopicLayout = ({ params }: { params: { slug: string } }) => {
  const topic = allTopics.find((topic) => topic.slug === params.slug)
  if (!topic) throw new Error(`Topic not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={topic.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(topic.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{topic.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: topic.body.html }}
      />
    </article>
  )
}

export default TopicLayout
