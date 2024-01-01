import React, { useState, useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Courses() {
  const { data , status } = useSelector((state) => state.language);
  const dispatch = useDispatch() ;
  const [postsPerPage, setPostsPerPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleReadMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBackClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setPostsPerPage(4);
      } else if (screenWidth >= 768) {
        setPostsPerPage(3);
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
  useEffect(()=>{
    if(status == 'idle'){
     dispatch(getLanguages())
    }
 } , [])

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, data.length);

  const displayedCourses = data && data
    .filter((course) => course.titre.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(startIndex, endIndex);

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mt-8 h-[70vh] ">
    
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data && displayedCourses.map((course) => (
          <Link to={`/language/${course.titre}/${course.slug}`}>
          <div key={course.id} className="bg-white gap-y-3 flex flex-col justify-center items-center rounded shadow transition duration-300 transform hover:scale-105">
            <div className='bg-black rounded-sm'>
            <img src={course.img} alt={course.titre} className="w-full h-40 object-cover mb-4 rounded" />
            </div>
            <h2 className="text-xl font-bold mb-2">{course.titre}</h2>
          </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        {currentPage > 1 && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleBackClick}
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
        )}

        {endIndex < data.length && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleReadMoreClick}
          >
            Read More <i className="fas fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

export default Courses;
