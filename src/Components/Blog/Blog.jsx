import React, { useState, useEffect } from "react";

const Shimmer = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 h-96 w-full rounded-md"></div>
    <div className="h-6 bg-gray-300 w-3/4 mt-3 rounded"></div>
    <div className="h-4 bg-gray-300 w-1/2 mt-2 rounded"></div>
  </div>
);

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://flyrad-be.onrender.com/api/blogs");
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold border-b-4 border-red-600 pb-1 inline-block">Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-14 md:pb-10">
        {/* Main Story */}
        <div className="md:col-span-2">
          {loading ? (
            <Shimmer />
          ) : blogs.length > 0 ? (
            <>
              <img
                src={blogs[0].featuredImage || "/path/to/default/image.jpg"}
                alt={blogs[0].title}
                className="w-full h-96 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-blue-700 mt-3">{blogs[0].title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Published on: {new Date(blogs[0].publishedDate).toLocaleDateString()}
              </p>
            </>
          ) : (
            <p>No blogs available.</p>
          )}
        </div>

        {/* Side Stories */}
        <div className="flex flex-col gap-6">
          {loading
            ? [1, 2].map((index) => <Shimmer key={index} />)
            : blogs.slice(1, 3).map((blog, index) => (
                <div key={index}>
                  <img
                    src={blog.featuredImage || "/path/to/default/image.jpg"}
                    alt={`Side story ${index + 1}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="text-md font-semibold text-blue-700 mt-2">{blog.title}</h4>
                  <p className="text-gray-500 text-xs">
                    Published on: {new Date(blog.publishedDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;