/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const PostCard = ({ title, description, image }: Props) => {
  return (
    <>
      <section className="py-12 bg-secondary">
        <div className=" m-auto px-6 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-secondary md:text-4xl dark:text-white">
              My Blog
            </h2>
            {/* <p className="text-secondary dark:text-gray-300 lg:mx-auto lg:w-6/12"></p> */}
          </div>

          <div className="">
            <div className="group relative  -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-extraClr dark:bg-transparent border  border-transparent hover:border-gray-100 dark:shadow-md  dark:shadow-extraClr dark:hover:border-black dark:hover:bg-black shadow-2xl shadow-secondary hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
              <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                <Image
                  src={image}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="">
                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                  Jul 27 2022
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="my-6 text-gray-600 dark:text-gray-300">
                  {description}
                </p>

                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-secondary dark:hover:bg-transparent transition duration-300 hover:border-transparent hover:bg-secondary hover:text-white dark:border-primary dark:text-primary"
                  >
                    Tailwindcss
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-secondary dark:hover:bg-transparent transition duration-300 hover:border-transparent hover:bg-secondary hover:text-white dark:border-primary dark:text-primary"
                  >
                    VueJS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostCard;
