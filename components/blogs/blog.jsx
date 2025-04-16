import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const Blog = ({ blogs }) => {
  return (
    <div>
      <section className="pt-28 pb-28 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-10">
          {/* Section Title */}
          <div className="flex flex-wrap items-center justify-between mb-12 pl-3">
            <div className="w-full md:w-2/3">
              <div className="mb-6">
                <div className="border-l-4 border-[var(--secondary)] pl-4">
                  <p className="text-[18px] font-medium text-[var(--secondary)] uppercase inline-block leading-none mb-2">
                    Blog Posts
                  </p>
                </div>
                <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[46px] md:leading-[52px] text-[#042132] uppercase font-extrabold mb-0">
                  Our Recent Blogs
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:text-right">
              <Link href="/blogs" className="/">
                <Button className="bg-[var(--secondary)] text-white px-5 py-5 text-xl cursor-pointer">
                  Read more
                </Button>
              </Link>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-3">
            {blogs.slice(0, 3).map((blog, index) => {
              const dateObj = new Date(blog.updatedAt);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleString("en-US", { month: "short" }); // e.g., "Oct"
              const year = dateObj.getFullYear();

              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden relative"
                >
                  {/* Date Badge */}
                  <div className="absolute top-0 right-0 w-[70px] h-[85px] bg-[var(--primary)] text-center p-[12px_0] rounded-br-[10px] rounded-tl-[10px] z-5 text-black flex flex-col items-center justify-center">
                    <FaCalendar className="mb-1" />
                    <span className="block text-xl font-bold">{day}</span>
                    <p className="text-sm">
                      {month} {year}
                    </p>
                  </div>

                  {/* Blog Image */}
                  <div className="h-50 overflow-hidden items-center p-5">
                    <Image
                      src={blog.image.url}
                      alt="blog"
                      height={400}
                      width={400}
                      className="hover:scale-105 overflow-hidden transform transition duration-300"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-5 relative">
                    <h4 className="text-xl font-semibold mb-2">
                      <Link href={`/blogs/${blog.slug}`}className="hover:text-gray-700 transition">
                        {blog.posttitle}
                      </Link>
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="text-gray-800 font-semibold hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;