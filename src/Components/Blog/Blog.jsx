import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to store blog data

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://flyrad-be.onrender.com/api/blogs');
        const data = await response.json();
        setBlogs(data.blogs); // Update state with fetched blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold border-b-4 border-red-600 pb-1 inline-block">
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-14 md:pb-10">
        {/* Main Story (first blog) */}
        {blogs.length > 0 && (
          <div className="md:col-span-2">
            {/* Main Story Image */}
            <img
              src={blogs[0].featuredImage || "/path/to/default/image.jpg"} // Use featuredImage from API, fallback to a default image if not available
              alt={blogs[0].title}
              className="w-full h-96 object-cover rounded-md"
            />
            {/* Main Story Title */}
            <h3 className="text-xl font-bold text-blue-700 mt-3">{blogs[0].title}</h3>
            {/* Main Story Description */}
            <p className="text-gray-700 mt-1">{blogs[0].description}</p>
            {/* Main Story Published Date */}
            <p className="text-gray-500 text-sm mt-2">
              Published on: {new Date(blogs[0].publishedDate).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* Side Stories (other blogs) */}
        <div className="flex flex-col gap-6">
          {blogs.slice(1, 3).map((blog, index) => (
            <div key={index}>
              {/* Side Story Image */}
              <img
                src={blog.featuredImage || "/path/to/default/image.jpg"} // Use featuredImage from API, fallback to default image
                alt={`Side story ${index + 1}`}
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Side Story Title */}
              <h4 className="text-md font-semibold text-blue-700 mt-2">{blog.title}</h4>
              {/* Side Story Description */}
              <p className="text-gray-600 text-sm">{blog.description}</p>
              {/* Side Story Published Date */}
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
