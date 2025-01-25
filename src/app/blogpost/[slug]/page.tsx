// Import necessary modules and components
import ClientSideContent from "./ClientSideContent";
interface BlogPostData {
  title: string;
  content: string;
  image: string;
}

// Function to simulate fetching data for the blog post
const fetchData = async (slug: string): Promise<BlogPostData> => {
  return {
    title: `Post: ${slug}`, // Replace with actual API data
    content: "This is a blog post content", // Replace with actual API data
    image: "/path/to/image.jpg", // Replace with actual API data
  };
};

// Define the type for the params object
interface BlogPostParams {
  slug: string;
}

// Server component
const BlogPost = async ({ params }: { params: BlogPostParams }) => {
  const { slug } = params;

  // Validate the slug
  if (!slug) {
    throw new Error("Slug is required");
  }

  // Fetch the blog post data
  const data = await fetchData(slug);

  // Render the client-side component with the fetched data
  return <ClientSideContent data={data} />;
};

export default BlogPost;
