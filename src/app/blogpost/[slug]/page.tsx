'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { Blog } from '@/app/blogpage/page';

// Define the structure of a single comment
interface Comment {
  text: string;
  author: string;
}

interface Params {
  params: {
    slug: string;
  };
}

// Async server-side function to fetch blog data
const BlogPost = async ({ params }: Params) => {
  const { slug } = params;

  // Fetch the blog data (server-side fetching remains here)
  const data: Blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      comments[] {
        _key,
        text,
        author
      }
    }[0]`,
    { slug }
  );

  return (
    <div>
      <ClientSideContent data={data} />
    </div>
  );
};

// This is the client-side component for managing comments and rendering the blog content
const ClientSideContent = ({ data }: { data: Blog }) => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>(data.comments || []);

  useEffect(() => {
    // Add any client-side logic if necessary
  }, []);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newComment: Comment = {
      text: comment,
      author: 'Anonymous', // Replace with actual user info if needed
    };

    // Update comments locally (you can replace this with an API call)
    setComments([...comments, newComment]);

    setComment('');
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data.heading}
          </h1>
          <p className="mb-8 leading-relaxed text-justify">{data.description}</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt={data.heading}
            src={data.imageUrl}
          />
        </div>
      </div>

      {/* Comment Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-800">Leave a Comment</h2>
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Write your comment here..."
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
          <div className="mt-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="bg-gray-50 p-4 mb-4 rounded-md shadow-md">
                  <p className="text-sm text-gray-600">{comment.text}</p>
                  <span className="text-xs text-gray-400">- {comment.author}</span>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
