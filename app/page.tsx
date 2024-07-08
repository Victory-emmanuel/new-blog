import { client } from "@/sanity/lib/client";
import groq from "groq";
import PostCard from "./components/postCard";
import { PostList } from "./types/Post";
import { urlForImage } from "@/sanity/lib/image";

const getpost = async (lastPageNum: number = 0) => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) [${lastPageNum}...${lastPageNum} + 3 ]
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
export default async function Home() {
  const posts: PostList[] = await getpost();
  console.log(posts);
  return (
    <main className="flex bg-secondary min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => (
        // <div  className="">
        // </div>
        <PostCard
          key={post._id}
          title={post.title}
          description={post.smallDescription}
          image={urlForImage(post.titleImage)}
        />
      ))}
    </main>
  );
}
