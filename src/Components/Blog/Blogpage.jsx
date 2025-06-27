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
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://flyrad-be.onrender.com/api/blogs");
        const data = await response.json();
        const blogList = Array.isArray(data.blogs) ? data.blogs : [];

        const sortedBlogs = blogList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setBlogs(sortedBlogs);
        if (sortedBlogs.length > 0) {
          setSelectedBlog(sortedBlogs[0]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredBlogs = blogs.filter((blog) => blog._id !== selectedBlog?._id);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-20 mt-10 bg-gradient-to-r to-[#1e347d] to-[#7686aa]">
      {/* Breadcrumb */}
      <Breadcrumb currentPage="Blogs" />

      <h2 className="text-3xl font-bold text-center text-[#1E1E1E] mt-14 mb-10">
        Our Blogs
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Blog Display */}
        <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden bg-gradient-to-r to-[#1e347d] to-[#7686aa]">
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
              </div>
            </>
          ) : (
            <div className="text-center mt-10 text-[#333333]">No blogs available.</div>
          )}
        </div>

        {/* Sidebar Blog List */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonSidebar key={index} />)
            : paginatedBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="flex items-center gap-4 cursor-pointer p-3 rounded-lg bg-gradient-to-r to-[#1e347d] to-[#7686aa] hover:bg-[#F8F9FA]"
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
              ))}

          {/* Modern Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0088FF] border-[#0088FF] hover:bg-[#0088FF] hover:text-white"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                    currentPage === page
                      ? "bg-[#0088FF] text-white border-[#0088FF]"
                      : "bg-white text-[#1E1E1E] border-gray-300 hover:bg-[#f0f0f0]"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0088FF] border-[#0088FF] hover:bg-[#0088FF] hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
