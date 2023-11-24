
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next/types";
import Greeting from "../components/Greeting";
import Heading from "../components/Heading";
import FeaturedPosts from "../components/FeaturedPosts";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);
  return (
    <>
      <div className="mt-8 divide-y divide-gray-200 dark:devide-gray-700 md:mt-16">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2 space-y-6 md:space-y-8">
            <Greeting />
            <div className="text-base leading-7 md:text-lg md:leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
            </div>
          </div>
        </div>
      </div>
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;