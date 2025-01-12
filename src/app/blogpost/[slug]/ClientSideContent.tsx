// src/app/blogpost/[slug]/ClientSideContent.tsx (Client Component)

'use client'; // Mark this as a client component

import React from 'react';

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
      <img src={data.image} alt={data.title} /> {/* Replace with <Image /> if needed */}
    </div>
  );
};

export default ClientSideContent;
