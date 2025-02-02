"use client"; // Mark this as a client component

import React from "react";
import Image from "next/image"; // Import Next.js Image component

// Define props type
type Props = {
  data: {
    title: string;
    content: string;
    image: string;
  };
};

const ClientSideContent: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-700 mt-2">{data.content}</p>
      {/* Use Next.js <Image /> component */}
      <Image 
        src={data.image} // Path to the image
        alt={data.title} // Accessible alt text
        width={800} // Specify width in pixels
        height={600} // Specify height in pixels
        className="rounded-lg shadow-md"
        priority // Optionally set for faster loading
      />
    </div>
  );
};

export default ClientSideContent;
