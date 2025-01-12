import Link from "next/link";
import { client } from '@/sanity/lib/client';
import { Key, ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, ReactPortal } from "react";

export default async function Home() {
  // Fetch the latest 3 blog posts from Sanity CMS
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc)[0..2] {
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  `);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/ftc.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              FutureTech Blog
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Welcome to <strong className="text-black-500">Future Tech Blog</strong>, where technology meets inspiration and innovation takes center stage. In a world that evolves at lightning speed, staying informed about the latest advancements is more crucial than ever. Our platform is designed to be your trusted companion, offering in-depth explorations of groundbreaking technologies and their impact on our lives. Whether it’s the rise of artificial intelligence, the promise of Web3, or the unveiling of cutting-edge gadgets, we’re committed to delivering well-researched insights and thought-provoking analyses that empower you to navigate the tech-driven future with confidence.
            </p>
            <p className="mb-0 leading-relaxed text-justify">
              At <strong className="text-black-500">Future Tech Blog</strong>, we believe that technology is not just about machines and codes—it’s about shaping a better tomorrow. Our blog serves as a bridge between complex innovations and everyday understanding, making even the most intricate trends accessible to all. From tech enthusiasts seeking to expand their knowledge to professionals striving to stay ahead in their industries, we cater to curious minds from all walks of life. Join us as we delve into the possibilities of transformative tech, unravel the mysteries of emerging tools, and illuminate the pathways to a smarter, more connected world. Together, let’s embrace the future, one innovation at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mt-0">Latest Blogs</h2>
          <p className="text-gray-600 mt-2">Catch up on the latest trends and insights in the tech world.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Loop through the blogs */}
          {blogs.map((blog: any) => (
            <div key={blog.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{blog.heading}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.description}</p>
                <Link href={`/blog/${blog.slug}`}>
                  <span className="text-indigo-600 mt-4 inline-block hover:underline cursor-pointer">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blogpage">
            <button className="inline-block px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-500 transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
