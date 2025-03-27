import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Breadcrumb Component
const Breadcrumb = ({ currentPage }) => {
  return (
    <nav className="text-[#333333] text-sm mb-5">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-[#0088FF] hover:underline">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#333333]">{currentPage}</li>
      </ul>
    </nav>
  );
};

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

const SkeletonSidebar = () => {
  return (
    <div className="animate-pulse flex items-center gap-4 p-3 rounded-lg bg-gray-200">
      <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
      <div className="space-y-2 w-full">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-400 rounded w-3/4"></div>
      </div>
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://flyrad-be.onrender.com/api/blogs");
        const data = await response.json();
        console.log("API Response:", data); // Debugging
        const blogList = Array.isArray(data.blogs) ? data.blogs : [];

        // Sort blogs by createdAt (latest first)
        const sortedBlogs = blogList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setBlogs(sortedBlogs);
        if (sortedBlogs.length > 0) {
          setSelectedBlog(sortedBlogs[0]); // Set the latest blog as the main blog
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-20 mt-10">
      {/* Breadcrumb */}
      <Breadcrumb currentPage="Blogs" />

      <h2 className="text-3xl font-bold text-center text-[#1E1E1E] mt-14 mb-10">
        Our Blogs
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Blog Display */}
        <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
          {loading ? (
            <SkeletonLoader />
          ) : selectedBlog ? (
            <>
              <img
                src={selectedBlog.featuredImage}
                alt={selectedBlog.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-[#333333]">
                  {new Date(selectedBlog.publishedDate).toLocaleDateString()}
                </p>
                <h3 className="text-2xl font-semibold mt-2 text-[#1E1E1E]">
                  {selectedBlog.title}
                </h3>
                <p className="text-[#333333] mt-2">{selectedBlog.description}</p>
                <button className="mt-4 text-[#0088FF] font-medium hover:underline">
                  Read More
                </button>
              </div>
            </>
          ) : (
            <div className="text-center mt-10 text-[#333333]">No blogs available.</div>
          )}
        </div>

        {/* Sidebar Blog List (Show All Except Main Blog) */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonSidebar key={index} />)
            : blogs.map(
                (blog) =>
                  blog._id !== selectedBlog?._id && (
                    <div
                      key={blog._id}
                      className="flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:bg-[#F8F9FA]"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div>
                        <p className="text-sm text-[#333333]">
                          {new Date(blog.publishedDate).toLocaleDateString()}
                        </p>
                        <h4 className="text-md font-medium text-[#1E1E1E]">
                          {blog.title}
                        </h4>
                      </div>
                    </div>
                  )
              )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
