
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showLanguages, setShowLanguages] = useState(false);
const navigate =useNavigate();
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      comment: 'Great experience with this product!',
      rating: 5,
      imageUrl: 'https://placekitten.com/100/100', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      comment: 'Excellent service and quality.',
      rating: 4,
      imageUrl: 'https://i.pinimg.com/564x/e4/8b/20/e48b20e4767994b3b177300f2b13326b.jpg', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      comment: 'Excellent service and quality.',
      rating: 4,
      imageUrl: 'https://i.pinimg.com/564x/8c/1d/ec/8c1deca608593db31994c7aab6e37a34.jpg', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      comment: 'Excellent service and quality.',
      rating: 4,
      imageUrl: 'https://i.pinimg.com/564x/51/82/0c/51820cbb3f4d408b26a15dd35a6dbb0a.jpg', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      comment: 'Excellent service and quality.',
      rating: 4,
      imageUrl: 'https://i.pinimg.com/564x/e4/8b/20/e48b20e4767994b3b177300f2b13326b.jpg', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      comment: 'Excellent service and quality.',
      rating: 4,
      imageUrl: 'https://i.pinimg.com/564x/e4/8b/20/e48b20e4767994b3b177300f2b13326b.jpg', 
    }
  ];
  const userInfo = cookies.get('user');
  const go = () => {
   
    navigate('/profile' , { state: { userInfo } })
   
  };
  
  const handleLogout = () => {
    cookies.remove('user');
    window.location.href = '/'; 
  };

  const isAuthenticated = cookies.get('user');
  return (
    <div className="w-fit" >
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
          {showLanguages && (
            <div className="absolute top-full left-0 bg-black p-2 rounded shadow mt-1" style={{width:'250px',marginLeft:'-100px'}}>
              <a href="#" className="text-white block py-1" style={{textAlign:'center'}}>
                JavaScript
              </a>
              <a href="#" className="text-white block py-1" style={{textAlign:'center'}}>
                Python
              </a>

              <a href="#" className="text-white block py-1" style={{textAlign:'center'}}>
             Java
            </a>

            <a href="#" className="text-white block py-1" style={{textAlign:'center'}}>
            Swift
          </a>
              
            </div>
          )}
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
    {isAuthenticated && (
      <>
        <button className="text-black hover:text-gray-300" onClick={handleLogout}>
          Logout
        </button>
        <button className="text-black hover:text-gray-300" onClick={go}>
          <i className="fa-solid fa-gear"></i>
        </button>
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
        <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow">
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
      {isAuthenticated && (
        <>
          <button className="text-black hover:text-gray-300" onClick={handleLogout}>
            Logout
          </button> <br></br>
          <button className="text-black hover:text-gray-300" onClick={go}>
            <i className="fa-solid fa-gear"></i>
          </button>
        </>
      )}
        </div>
      )}
    </div>
  </nav>
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-8 mx-5 mt-10" style={{marginTop:'60px'}} >
    <div className="md:w-2/4 text-center" >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Knowledge with
        <span className="text-brightGreen" style={{ color: 'darkviolet' }}>
          .LearnCode
        </span>
      </h2>
      <p className="text-lightText mt-4 md:mt-12 text-center md:text-left text-sm md:text-base lg:text-lg">
        eStudy is your gateway to a world of limitless learning possibilities. With
        our cutting-edge eLearning platform, you can explore a vast library of
        courses, from academic subjects to practical skills, all designed to help
        you achieve your goals.
      </p>
  
      
        <button
          className="py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-black transition-all text-sm md:text-base lg:text-lg"
          style={{ background: 'darkviolet', color: 'white' }}
       >
          Start for free &nbsp;
          <i className="fa-solid fa-arrow-right"></i>
        </button>
  
    </div>
  
    <div className="w-full md:w-2/4 mt-4 md:mt-0">
      <img
        src="images/ts.png"
        alt="img"
        className="w-full md:max-w-lg h-auto mx-auto"
      />
    </div>
  </div>
  




  <div id="kolchi" className="my-10 mx-5 border-3 border-solid border-gray p-6 rounded-md bg-orange">
  <div className="md:flex md:justify-between flex-col md:flex-row">
    <div className="md:w-3/5 lg:w-2/5 mb-4 md:mb-0">
      <h1 className="text-3xl font-semibold mb-4">I want to</h1>

      <div className="mb-6 md:mb-0 border border-solid border-blue-500 p-4 rounded-md language-div" style={{ paddingLeft: '20px', width: '100%' }}>
        <h2 className="flex items-center text-brightGreen">
          <i className="fa-solid fa-book mr-2" style={{ color: 'darkviolet' }}></i> Learn a programming language interactively
        </h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat
          facilis omnis accusantium porro autem et quasi voluptates reprehenderit amet!
        </p>
      </div>

      <div className="mt-4 border border-solid border-blue-500 p-4 rounded-md language-div" style={{ paddingLeft: '20px', width: '100%' }}>
        <h2 className="flex items-center text-brightGreen">
          <i className="fa-solid fa-arrow-up mr-2" style={{ color: 'darkviolet' }}></i> Improve my Skills
        </h2>
      </div>
    </div>

    <div className="md:w-2/3 lg:w-3/5 mt-4 lg:mt-0 flex flex-wrap gap-4" style={{ marginLeft: '100px' }}>
      {[
        { icon: 'fa-brands fa-python', title: 'Python' },
        { icon: 'fa-solid fa-c', title: 'C' },
        { icon: 'fa-brands fa-java', title: 'Java' },
        { icon: 'fa-brands fa-php', title: 'PHP' },
      ].map((item, index) => (
        <div key={index} className="mb-6 language-div w-full md:w-1/2 lg:w-1/4" style={{ border: '2px solid blue', paddingLeft: '15px', paddingTop: '10px', width: '300px' }}>
          <span className="text-brightGreen"><i className={`fa ${item.icon}`} style={{ fontSize: '42px' }}></i></span>
          <p className="text-sm mt-2">Learning path</p>
          <h2 className="text-lg font-semibold" style={{ fontSize: 'clamp(1.5rem, 4vw, 0.25rem)' }}>Become a <span style={{ color: 'darkviolet' }}>{item.title}</span> master</h2>
          <p className="text-sm">5 courses &nbsp; +100 quizzes</p>
        </div>
      ))}
    </div>
  </div>

  <a href="#" className="text-brightGreen flex items-center mt-4 md:ml-auto">
    Browse full catalog <i className="fa-solid fa-arrow-right ml-2"></i>
  </a>
</div>

    
    


      <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4"><i class="fa-solid fa-angles-right"></i> Code in your Browser</h1>
    <p class="text-lg text-gray-600 mb-4">No need to download any tools</p>
    <img src="images/MK.png" alt="Code in your Browser" class="max-w-full h-auto rounded shadow-md"/>
</div> 

<div className="container mx-auto p-4 flex flex-col md:flex-row relative"
style={{
  backgroundImage: "url('https://gomycode.com/ma/wp-content/uploads/sites/27/2023/08/What-is-a-Div-Tag-and-How-to-Style-it-with-CSS.jpg')",
  backgroundSize: "cover",
  borderRadius: "10px",
  marginTop: "100px"
}}>

<div id="div1" className="flex-1 bg-white bg-opacity-50 rounded-lg backdrop-blur-md shadow-md p-6 m-4 relative z-10 text-white">
  <h1 className="text-2xl font-bold mb-2">Join thousands of coders</h1>
  <button className="bg-violet-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
    Start free trial
  </button>
</div>

<div id="div2" className="flex-1 bg-white bg-opacity-50 rounded-lg backdrop-blur-md shadow-md p-6 m-4 relative z-10 text-white">
  <h1 className="text-2xl font-bold mb-2">10M +</h1>
  <h2>Global learners</h2>
</div>

<div id="div3" className="flex-1 bg-white bg-opacity-50 rounded-lg backdrop-blur-md shadow-md p-6 m-4 relative z-10 text-white">
  <h1 className="text-2xl font-bold mb-2">300K +</h1>
  <h2>People enrolled</h2>
</div>

<div id="div4" className="flex-1 bg-white bg-opacity-50 rounded-lg backdrop-blur-md shadow-md p-6 m-4 relative z-10 text-white">
  <h1 className="text-2xl font-bold mb-2">180 +</h1>
  <h2>Countries</h2>
</div>

</div>


      <div className="container mx-auto p-8" id='reviews' style={{ marginTop:'150px'}}>
      <h1 class="text-4xl font-bold mb-4"><i class="fa-solid fa-angles-right"></i> Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={review.imageUrl}
                alt={`${review.name}'s profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">{review.name}</p>
                <p className="text-gray-600">{review.jobTitle}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    className="text-violet-500 w-4 h-4"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.45 6.29h6.29l-5.09 4.96 1.91 6.29L10 15.42l-5.56 4.17 1.91-6.29L1.27 6.29h6.29L10 0z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">({review.rating})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div class="container mx-auto mt-8">
    <div id="txt1" class="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-4xl font-bold mb-4">Unlock Your Coding Potential</h1>
        <p class="text-gray-600">Embark on exciting coding projects to boost your skills and creativity.</p>

        <div id="d" class="flex justify-center items-center flex-wrap mt-8">
            <div id="d1" class="m-4 bg-white p-4 rounded-lg shadow-md flex-1">
                <img src="https://i.pinimg.com/564x/87/3f/49/873f491702a8d4b0ae15ee9af4131d83.jpg" class="w-full h-64 object-cover rounded mb-2" alt="Project 1"/>
                <p class="text-center">Personal Portfolio Website</p>
            </div>

            <div id="d2" class="m-4 bg-white p-4 rounded-lg shadow-md flex-1">
                <img src="https://i.pinimg.com/564x/18/cc/03/18cc0397d2ef04e3cd08bf4f7166982d.jpg" class="w-full h-64 object-cover rounded mb-2" alt="Project 2"/>
                <p class="text-center">To-Do List App with JavaScript</p>
            </div>

            <div id="d3" class="m-4 bg-white p-4 rounded-lg shadow-md flex-1">
                <img src="https://i.pinimg.com/564x/54/f8/8d/54f88d64c3f7bc0c018862232d08206b.jpg" class="w-full h-64 object-cover rounded mb-2" alt="Project 3"/>
                <p class="text-center">E-commerce website with ReactJs</p>
            </div>

            <div id="d4" class="m-4 bg-white p-4 rounded-lg shadow-md flex-1">
                <img src="https://i.pinimg.com/564x/01/17/13/011713a7b499ebec17ac94813152fdbd.jpg" class="w-full h-64 object-cover rounded mb-2" alt="Project 4"/>
                <p class="text-center">Interactive Quiz Game in Java</p>
            </div>
        </div>

        <a href="#" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 inline-flex items-center">
            Explore Projects
            <i class="fas fa-arrow-right ml-2"></i>
        </a>

     
    </div>
</div>



<div id="start" className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-800 text-white" style={{ marginTop: "180px" }}>
<div id="img" className="md:mr-8 mb-4 md:mb-0">
  <img src="images/learn.png" alt="Learning" className="max-w-[500px] h-auto" />
</div>
<div id="txt" className="text-center md:text-left">
  <h1 className="text-4xl font-bold mb-4">Start Coding Today</h1>
  <button className="bg-white hover:bg-white-500 text-indigo-800 font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
    Get Started <i class="fa-solid fa-check"></i>
  </button>
</div>

</div>

<br></br><br></br>
    </div>
  );
};

export default Index;
