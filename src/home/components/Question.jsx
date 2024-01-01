import React from 'react'
import { motion } from 'framer-motion';
const Question = ({handleOptionClick , selectedOption , currentQuestion   , progressPercentage , controls , totalQuestions , question , handleNext , quizData}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='flex justify-center items-center h-auto md:h-[100vh] w-full   grow'
    >
        <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='border-2 border-gray-400 rounded-[6px] flex flex-col p-6 gap-y-6 w-11/12 sm:w-3/4  lg:w-4/6'
>
    <div className='relative py-1'>
    <div className='flex '>
        <div className='w-full bg-gray-300 rounded-full'>
        <motion.div
            className='bg-green-400 rounded-full'
            animate={controls}
            style={{ width: `${progressPercentage}%` , height: '10px'  }}
            transition={{ duration: 0.5 }}
        ></motion.div>
        </div>
    </div>
    </div>
    <div className='flex justify-between'>
    <h1 className='text-xl font-extrabold'>Quiz {quizData.titre}</h1>
    <span>
        {currentQuestion}/{totalQuestions}
    </span>
    </div>
    <div>
    <h1 className='text-lg font-extrabold'>{question[currentQuestion -1].bodyQuestion}</h1>
    </div>
    <div className='flex flex-col gap-y-4'>
    <h2 className='text-lg font-bold'>{}</h2>
    <div className='flex flex-col gap-y-4'>
    {question[currentQuestion - 1].answers.map((option, index) => (
      <div
        key={option.id}
        className={`border-2 py-3 px-2 option-${index} ${option.correct == 1 && 'y'}`}
        onClick={(e) => handleOptionClick(e , index , option)}
      >
        {`${String.fromCharCode(65 + index)}: ${option.body}`}
      </div>
    ))}
    </div>
    </div>
    <button
    onClick={()=>{handleNext(selectedOption)}}
    className='bg-purple-400 py-3 px-2 text-md text-white font-semibold'
    >
    Next
    </button>
    
        </motion.div>
    </motion.div>
  )
}

export default Question