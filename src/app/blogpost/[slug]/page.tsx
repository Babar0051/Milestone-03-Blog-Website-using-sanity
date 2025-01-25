import ClientSideContent from "./ClientSideContent"; // Import the client component

// Define the type for the data returned by fetchData
interface BlogPostData {
  title: string;
  content: string;
  image: string;
}

// Update fetchData to return the correct type
const fetchData = async (slug: string): Promise<BlogPostData> => {
  return {
    title: `Post: ${slug}`, // Replace with actual API data
    content: "This is a blog post content", // Replace with actual API data
    image: "/path/to/image.jpg", // Replace with actual API data
  };
};

// Server Component
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // Extract slug from params

  // Ensure params is synchronous and properly typed
  if (!slug) {
    throw new Error("Slug is required");
  }

  // Fetch data on the server
  const data = await fetchData(slug);

  // Pass the fetched data to the client component
  return <ClientSideContent data={data} />;
};

export default BlogPost;
