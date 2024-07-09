import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Post } from "@/app/types/Post";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const getPost = async (slug: string) => {
  const query = groq`*[_type == 'blog' && slug.current == $slug]{
     _id,
    title,
    smallDescription,
    content,
    _createdAt,
    "currentslug": slug.current,
    titleImage
  }`;
  return client.fetch(query, { slug });
};
export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [post]: Post[] = await getPost(slug);
  console.log(post);
  return (
    <>
      <div className="dark:bg-secondary">
        <div className="py-16">
          <div className="xl:container m-auto px-6 md:px-12 xl:px-6">
            <div className="">
              <div className="group space-y-6">
                <Image
                  src={urlForImage(post.titleImage)}
                  width="1000"
                  height="667"
                  alt="title cover"
                  loading="lazy"
                  className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                />
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <article className="prose prose-xl ">
                  <div className="">
                    <PortableText value={post.content} />
                  </div>
                </article>

                <div className="flex gap-6 items-center">
                  <a
                    href="#"
                    className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Image
                      width="1000"
                      height="667"
                      className="w-8 h-8 object-cover rounded-full"
                      src=""
                      alt=""
                    />
                    <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                      Bernard Ng.
                    </span>
                  </a>
                  <span className="w-max block font-light text-gray-500 sm:mt-0">
                    <time className="" dateTime={post._createdAt}>
                      {format(post._createdAt, "LLLL d, yyyy")}
                    </time>
                  </span>
                  <div className="flex gap-2 items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400 dark:text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>2 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
