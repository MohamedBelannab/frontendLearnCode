import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isAuthenticated = cookies.get('user');
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-xl font-bold" style={{color:'darkviolet'}} >.LearnCode</h1>
        </div>

        <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-black hover:text-gray-300">
            Home
          </Link>
          
          <Link
           to="/courses"
            className="text-black hover:text-gray-300 relative"
            onMouseEnter={() => setShowLanguages(true)}
            onMouseLeave={() => setShowLanguages(false)}
          >
            Courses
          </Link>
          <Link to="/blogs" className="text-black hover:text-gray-300">
            Blog
          </Link>
          <a href="#" className="text-black hover:text-gray-300">
            Contact
          </a>
          {!isAuthenticated && (
            <>
              <Link to="/login" className="text-black hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="text-black hover:text-gray-300">
                SignUp
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blackfocus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow" >
            <a href="#" className="text-black block py-2">
              Home
            </a>
            <a href="#" className="text-black block py-2">
              Courses
            </a>
            <a href="#" className="text-black block py-2">
              Blog
            </a>
            <a href="#" className="text-black block py-2">
              Contact
            </a>
            <a href="#" className="text-black block py-2">
            Login
          </a>
          <a href="#" className="text-black block py-2">
          SignUp
        </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
