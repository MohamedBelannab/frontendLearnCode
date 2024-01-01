import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Noquiz = () => {
    const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-auto md:h-[100vh] w-full grow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border-2 border-gray-400 rounded-[6px] flex flex-col p-6 gap-y-6 w-11/12 sm:w-3/4 lg:w-4/6"
      >
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 items-center justify-center">
          <img  className="w-28 rounded-full cursor-pointer" src="https://api.dicebear.com/7.x/big-ears/svg?seed=learn" alt="User"/>
            <p className={`text-md text-center font-semibold`}>
                Quiz will be added to this language as soon as possible !
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-purple-400 py-3 px-2 text-md text-white font-semibold"
        >
          Reset
        </button>
      </motion.div>
    </motion.div>
  )
}

export default Noquiz