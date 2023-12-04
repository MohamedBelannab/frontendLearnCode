import React, { useEffect  , useState } from 'react';
import '../css/language.css';
import HeadLanguage from '../components/HeadLanguage';
import StepsLanguage from '../components/StepsLanguage';
import Example from '../components/Example';
import Playlist from '../components/PlayList';
import Lottie from 'lottie-react';
import bgLang from '../../assets/bgLanguage.json'



const Languages = () => {
  const backgroundStyle = {
    height: '100%',
    width: '72%',
    position: 'absolute',
    top: '-12%',
    left: '67%'
  };
  return (
    <div className=' overflow-x-hidden relative'>
    <HeadLanguage/>
    <Lottie animationData={bgLang} loop autoplay className='z-0 ' style={backgroundStyle} />
    <div className='container mx-auto w-11/12 sm:w-3/4 md:w-[70%] lg:w-1/2 px-4 py-6 z-30 relative'>
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Python</h1>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur atque laboriosam eum, vero placeat eaque id nisi nostrum iure deserunt iste facilis quas soluta minus explicabo esse magnam aliquid.
          </p>
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Why Learn Python?</h1>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur atque laboriosam eum, vero placeat eaque id nisi nostrum iure deserunt iste facilis quas soluta minus explicabo esse magnam aliquid.
          </p>
        </div>
      </div>
      <hr />
      <Example/>
      <hr />
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Applications</h1>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur atque laboriosam eum, vero placeat eaque id nisi nostrum iure deserunt iste facilis quas soluta minus explicabo esse magnam aliquid.
          </p>
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Frameworks</h1>
        <div>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least 10 characters
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least 10 characters
            </li>
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least 10 characters
            </li>
            
        </ul>
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Guide</h1>
        <div className='pt-2'>
          <StepsLanguage/>
          
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-y-5'>
      <h1 className='text-textColor text-2xl  font-extrabold mb-3'>PlayList</h1>
      <Playlist/>
      </div>
      <hr />
    </div>
   
    </div>
  );
};

export default Languages;
