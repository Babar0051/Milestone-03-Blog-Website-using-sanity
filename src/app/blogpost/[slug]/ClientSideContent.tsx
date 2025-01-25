// src/app/blogpost/[slug]/ClientSideContent.tsx (Client Component)

"use client"; // Mark this as a client component

import React from "react";
import Image from "next/image"; // Import the Next.js Image component

type Props = {
  data: {
    title: string;
    content: string;
    image: string;
  };
};

const ClientSideContent: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      {/* Use Next.js <Image /> component */}
      <Image 
        src={data.image} // Path to the image
        alt={data.title} // Accessible alt text
        width={800} // Specify width in pixels
        height={600} // Specify height in pixels
        layout="responsive" // Ensures responsive scaling
        priority // Optionally set for faster LCP
      />
    </div>
  );
};

export default ClientSideContent;
