'use client';

import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        setComments(parsedComments);
      } catch (error) {
        console.error("Error parsing comments from local storage:", error);
      }
    }
  }, []);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
