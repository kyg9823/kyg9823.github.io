import { Post } from "contentlayer/generated";
import Link from "next/link";
import { FEATURED_POSTS } from "../data/constants";
import { formatDate } from "../utils/date";
import BlogTags from "./BlogTags";

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <ul className="divide-y divide-gray-200 dark:devide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, FEATURED_POSTS).map((frontMattter) => {
          const { _id, date, title, summary, tags, _raw } = frontMattter;
          return (
            <li key={_id} className="py-12">
              <article>
                <div className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h2 className="mb-1 text-2xl md:text-3xl font-bold tracking-tight">
                          <Link href={`/blog/${_raw.flattenedPath}`} className="text-gray-900 dark:text-gray-100">
                            <span>{title}</span>
                          </Link>
                        </h2>
                        <BlogTags tags={tags || []} />
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${_raw.flattenedPath}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}>
                        <span>Read more &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FeaturedPosts;