
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MdClose } from "react-icons/md";
import Lottie from 'lottie-react';
import quizRo from '../../assets/quizRo.json'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getQuiz } from '../../slices/quizSlice';
import '../css/quiz.css'
import Question from '../components/Question';
import Results from '../components/Results';
import Noquiz from '../components/Noquiz';

const Quiz = () => {
  const {data , status} = useSelector(state => state.quiz) 
  const location = useLocation();
  const { id } = location.state;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const controls = useAnimation();
  const [progressPercentage, setProgressPercentage] = useState(0);
  let [score, setScore] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [lock , setlock] = useState(false) 
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const quizData = data && data[0];
  const question = quizData?.question
  const totalQuestions = 6;
  const [result , setResult] = useState(false)
  let [index  ,setIndex] = useState(0) ;


  const handleGoBack = () => {
    navigate(-1);
  };
  const handleOptionClick = (e, index, option) => {
    setSelectedOption(index);
  
    if (!lock) {
      const parentElement = e.target.parentElement;
      const options = parentElement.children;
  
      if (option.correct === 1) {
        e.target.classList.add('correct');
        setlock(true);
      } else {
        e.target.classList.add('wrong');
  
        setTimeout(() => {
          for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('y')) {
              options[i].classList.add('correct');
              break;
            }
          }
          setlock(true);
        }, 500);
      }
    }
  };


  const handleNext = (selectedOption) => {
    
    
    if (lock == true) {
      const isCorrect = question[currentQuestion - 1].answers[selectedOption].correct;
      if (index == totalQuestions - 1) {
        setResult(true)
        return 0 
      }
      setlock(false)
      setIndex(++index)
      if (isCorrect == 1) {
        setScore(++score);
      }

      if (currentQuestion < totalQuestions ) {
        setCurrentQuestion((prev) => prev + 1);
      }
    }
    console.log(selectedOption);
    
  };

  const calculateRating = (score) => {
    if (score >= 80) {
      return 5;
    } else if (score >= 60) {
      return 4;
    } else if (score >= 40) {
      return 3;
    } else if (score >= 20) {
      return 2;
    } else {
      return 1;
    }
  };

  const percentage = (score / totalQuestions) * 100;
  const rating = calculateRating(percentage);

  

  useEffect(()=>{

    if(status == 'idle') dispatch(getQuiz(id))

  } , [status, id, dispatch])
  useEffect(() => {
 
    const newProgressPercentage = (currentQuestion / totalQuestions) * 100;
    setProgressPercentage(newProgressPercentage);
    controls.start({ width: `${newProgressPercentage}%` });

  }, [currentQuestion, controls]);

  return (
    <>
    {
      status == 'success' &&
      <div className='relative py-6  items-center'>
        <button onClick={handleGoBack} className='fixed top-0 right-0 px-4 py-6 '>
            <MdClose className='text-3xl font-extrabold'/>
        </button>
        <div className=' flex  items-center  flex-col-reverse md:flex-row '>
            {
              result == false && data.length > 0 &&
              <Question 
              handleNext={handleNext} 
              handleOptionClick={handleOptionClick} 
              selectedOption={selectedOption} 
              currentQuestion={currentQuestion} 
              progressPercentage={progressPercentage} 
              controls={controls} 
              totalQuestions={totalQuestions} 
              question={question} 
              quizData={quizData}/>
            }
            {
              result == true && data.length > 0 &&
              <Results rating ={rating} percentage={percentage} score={score} totalQuestions={totalQuestions}/>
            }
            { status=='success' && data.length  == 0 && <Noquiz/>}
            <div className=' flex  justify-items-start px-9 items-cente'>
            <Lottie animationData={quizRo} loop autoplay className='w-25'  />
            </div>
        </div>
       </div>
    }
    </>
  );
};






export default Quiz;


