import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../layouts/Navbar';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setPostsPerPage(8);
      } else if (screenWidth >= 768) {
        setPostsPerPage(4);
      } else {
        setPostsPerPage(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blogs'); // Update the API endpoint
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const displayedBlogs = blogPosts
    .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(startIndex, endIndex);

  const handleReadMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBackClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const isAuthenticated = cookies.get('user');
  return (
    <div>
      <Navbar/>
      <br />
      <div className="container mx-auto p-4" style={{ marginTop: '80px' }}>
        <h1 className="text-3xl font-bold mb-4">
          <i className="fa-solid fa-angles-right"></i> Programming Language Blog
        </h1>

        <input
          type="text"
          placeholder="Search languages... "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded mt-4 mb-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${postsPerPage} lg:grid-cols-4 gap-4`}>
          {displayedBlogs.map((post) => (
            <Link to={`/blogs/${post.title}/${post.slug}`}>
            <div key={post.id} className="bg-white p-4 rounded shadow" style={{ maxWidth: '300px' }}>
              <img src={post.img} alt={post.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">Published on {post.publishedDate}</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                More infos
              </a>
            </div>
            </Link>
          ))}
        </div>

        {currentPage > 1 && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4 mt-4"
            onClick={handleBackClick}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        )}

        {endIndex < blogPosts.length && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            onClick={handleReadMoreClick}
          >
            Read More <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
