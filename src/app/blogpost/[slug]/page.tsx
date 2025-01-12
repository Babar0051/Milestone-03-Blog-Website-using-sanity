// src/app/blogpost/[slug]/page.tsx (Server Component)

import ClientSideContent from './ClientSideContent'; // Import the client component

// Server Component
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  // Fetch data on the server
  const data = await fetchData(params.slug); 

  // Pass the fetched data to the client component
  return <ClientSideContent data={data} />;
};

// A mock function for fetching data
const fetchData = async (slug: string) => {
  // Simulate fetching data (replace with actual API call)
  return {
    title: `Post: ${slug}`,
    content: "This is a blog post content",
    image: "/path/to/image.jpg",
  };
};

export default BlogPost;
