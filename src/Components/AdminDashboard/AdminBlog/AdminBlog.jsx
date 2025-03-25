import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdminBlog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(null);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [blogs, setBlogs] = useState([]);

  // For alert and success messages
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Handle modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://flyrad-be.onrender.com/api/blogs");
        const data = await response.json();

        
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", heading);
    formData.append("description", description);
    formData.append("featuredImage", image);
    formData.append("date", date);

    try {
      const response = await fetch("https://flyrad-be.onrender.com/api/addblog", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Update the blogs list
        setBlogs([...blogs, data.blog]);
        toggleModal();
        setMessage("Blog added successfully!");
        setMessageType("success");

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 3000);
      } else {
        console.error(data.message);
        setMessage(data.message || "Error adding blog.");
        setMessageType("error");

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      setMessage("Error adding blog.");
      setMessageType("error");

      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    }
  };

  // Handle blog deletion
  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        const response = await fetch(`https://flyrad-be.onrender.com/api/deleteblog/${id}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (data.success) {
          // Remove the deleted blog from the state
          setBlogs(blogs.filter((blog) => blog._id !== id));
          setMessage("Blog deleted successfully!");
          setMessageType("success");

          // Hide message after 3 seconds
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 3000);
        } else {
          console.error(data.message);
          setMessage(data.message || "Error deleting blog.");
          setMessageType("error");

          // Hide message after 3 seconds
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 3000);
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        setMessage("Error deleting blog.");
        setMessageType("error");

        // Hide message after 3 seconds
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 3000);
      }
    }
  };

  // Pagination controls
  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="text-pink-400 text-3xl font-bold mb-4">Blogs</div>

      {/* Display Message */}
      {message && (
        <div
          className={`text-center py-2 mb-4 rounded-md ${
            messageType === "success"
              ? "bg-green-600"
              : "bg-red-600"
          } text-white font-semibold shadow-lg`}
        >
          {message}
        </div>
      )}

      <div className="bg-gray-800 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-pink-400 text-lg font-semibold">All Blogs</h5>
          <button className="bg-pink-500 text-white text-sm px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 cursor-pointer">
            Newest
          </button>
        </div>

        {/* Render Blogs */}
        <div className="flex flex-wrap gap-4">
          {currentPosts.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white w-80 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={blog.featuredImage}
                  alt="Blog"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-sm px-2 py-1 rounded-lg">
                  Lifestyle
                </span>
              </div>
              <div className="p-4">
                <h6 className="font-bold text-lg">{blog.title}</h6>
                <p className="text-sm text-gray-300">
                  {blog.date
                    ? new Date(blog.date).toLocaleDateString()
                    : "No date"}
                </p>
                <p className="text-sm text-gray-300">{blog.description}</p>
              </div>
              <div className="flex justify-between p-4">
                <button className="bg-purple-500 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 hover:bg-purple-600 transition duration-300 cursor-pointer">
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(blog._id)} // Call deleteBlog with the blog's ID
                  className="bg-red-500 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition duration-300 cursor-pointer"
                >
                  Delete
                </button>
                <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition duration-300 cursor-pointer">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={prevPage}
            className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition duration-300 cursor-pointer"
          >
            Previous
          </button>
          <span className="text-white">
            {currentPage} / {Math.ceil(blogs.length / postsPerPage)}
          </span>
          <button
            onClick={nextPage}
            className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition duration-300 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add Blog Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleModal}
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition duration-300 cursor-pointer"
        >
          + Add Blog
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && toggleModal()}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
        >
          <div className="bg-gray-800 text-white p-6 rounded-lg w-96 relative">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2 p-2 border border-gray-600 rounded-md w-full"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="mt-4 w-full h-48 object-cover rounded-md"
                  />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Date</label>
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  className="mt-2 p-2 border border-gray-600 rounded-md w-full"
                  placeholderText="Select a date"
                  dateFormat="yyyy-MM-dd"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Heading</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-600 rounded-md w-full"
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder="Enter blog heading"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-600 rounded-md w-full"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter blog description"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 text-2xl cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
