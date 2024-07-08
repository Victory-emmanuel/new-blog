import { client } from "@/sanity/lib/client";
import groq from "groq";
import PostCard from "./components/postCard";
import { PostList } from "./types/Post";
import { urlForImage } from "@/sanity/lib/image";
import Pagination from "./components/paginationSect";
import PaginationSect from "./components/paginationSect";

const getpost = async (lastPageNum: number = 0) => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) [${lastPageNum}...${lastPageNum} + 2 ]
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
const getTotalPosts = () => {};
export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const pageNum = Number(searchParams?.page ?? 0);
  const posts: PostList[] = await getpost(pageNum);
  console.log(posts);
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
        <PaginationSect />
      </div>
    </main>
  );
}
