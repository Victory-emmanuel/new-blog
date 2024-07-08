import { client } from "@/sanity/lib/client";
import groq from "groq";
import PostCard from "./components/postCard";
import { PostList } from "./types/Post";
import { urlForImage } from "@/sanity/lib/image";
import Pagination from "./components/paginationSect";
import PaginationSect from "./components/paginationSect";

const getpost = async (lastPageNum: number = 0) => {
  // Fix range calculation and use proper GROQ syntax
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) [${lastPageNum}...${lastPageNum + 2}]
 {
  _id,
    title,
    smallDescription,
    _createdAt,
    "currentslug": slug.current,
    titleImage
}`;
  return client.fetch(query, { lastId: lastPageNum });
};

// Fix the query to use the correct equality check
const getTotalPosts = async () => {
  const query = groq`count(*[_type == "blog"])`; // Corrected to use "==" for type check
  return client.fetch(query);
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const pageNum = Number(searchParams?.page ?? 0);
  const posts: PostList[] = await getpost(pageNum);
  const postsNum = await getTotalPosts();
  return (
    <main className="flex bg-secondary min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.smallDescription}
            image={urlForImage(post.titleImage)}
          />
        ))}
        <PaginationSect maxPage={postsNum} />
      </div>
    </main>
  );
}
