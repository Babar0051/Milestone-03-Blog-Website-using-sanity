import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define the structure of a Blog item
export interface Blog {
  comments: never[];
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Home() {
  // Fetch the data from the Sanity CMS
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{
    heading,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);

  return (
    <main className="h-fit flex justify-center items-center flex-col gap-10 mt-10">
      <div className="text-black font-bold text-5xl p-2 text-center">
        Future Tech Blog
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((blog, index) => (
          <Link key={index} href={`/blogpost/${blog.slug}`} className="group">
            <div className="p-4 shadow-lg rounded-lg bg-white max-w-[15rem] h-[25rem] hover:scale-105 active:scale-100 transition-all duration-200 flex flex-col justify-between">
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={blog.imageUrl}
                  alt={blog.heading}
                  width={240}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="text-lg font-bold text-gray-800">{blog.heading}</h2>
                <p className="text-sm text-gray-600 flex-1">
                  {blog.description.length > 100
                    ? `${blog.description.substring(0, 100)}...`
                    : blog.description}
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    View More
                  </Link>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
