import React, { useEffect  } from 'react';
import '../css/language.css';
import HeadLanguage from '../components/HeadLanguage';
import Example from '../components/Example';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import bgLang from '../../assets/bgLanguage.json'
import ElementLang from '../components/language/ElementLang';
import ElementListLang from '../components/language/ElementListLang';
import ElementGuidLang from '../components/language/ElementGuidLang';
import ElementPlaylistLang from '../components/language/ElementPlaylistLang';
import WhyLearn from '../components/language/WhyLearn';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from 'react-router-dom';
import { getLanguages  } from '../../slices/langSlice';
import Remarque from '../components/language/Remarque';
import Navbar from '../layouts/Navbar';
import NotFound from './NotFound';





const Languages = () => {
  const { data , status } = useSelector((state) => state.language);
  const dispatch = useDispatch() ;
  const navigate  = useNavigate()
  let { slug } = useParams();
  
  const backgroundStyle = {
    height: '100%',
    width: '72%',
    position: 'absolute',
    top: '-12%',
    left: '67%'
  };
  

    const language = data &&  data.find((ele) => ele.slug === slug)

    const startQuiz = ()=>{
      navigate(`/quiz/${language.titre}` , {state : {id : language.id}})

    }

    useEffect(()=>{
       if(status == 'idle'){
        dispatch(getLanguages())
       }
    } , [])
    
  return (
    
    <>
    <Navbar/>
    {
      language ? <div className=' overflow-x-hidden relative'>
      <HeadLanguage img={language.img} titre={language.titre}/>
      <Lottie animationData={bgLang} loop autoplay className='z-0 ' style={backgroundStyle} />
      <div className='container mx-auto w-11/12 sm:w-3/4 md:w-[70%] lg:w-1/2 px-4 py-6 z-30 relative'>
        <ElementLang titre={language.titre} description={language.description}  />
        <hr />
        <WhyLearn titre={language.titre} WhyLearn={language.WhyLearn} />
        <hr />
        <Example titre={language.titre}e example={language.example}/>
        <hr />
        <ElementListLang titre='Applications' list={language.Applications}/>
        <hr />
        <ElementListLang titre='Frameworks' list={language.frameworks}/>
        <hr />
        <ElementGuidLang Guide={language.Guide} />
        <hr />
        <Remarque remarque={language.remarque}/>
        <hr/>
        <ElementPlaylistLang playList={language.playList} />
        <hr />
        <div onClick={()=>{startQuiz()}} className='py-5 text-center'>
          <Link 
              className='bg-purple-400 py-3 px-6 text-md text-white font-semibold'
              >
              Start Quiz
          </Link>
        </div>
        
      </div>
     
      </div> :
      <NotFound navbar={false}/>
    }
  
    </>
  );
};

export default Languages;
