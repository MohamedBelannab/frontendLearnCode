
import React, { useEffect } from 'react' 
import { getLanguages } from '../slices/langSlice'
import { useDispatch , useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import  Navbar  from './layouts/Navbar'
import { Footer } from './layouts/Footer'
const Home = () => {
  const dispatch = useDispatch()
  const  {status} = useSelector(state => state.language)

  useEffect(()=>{

    if (status == 'idle') dispatch(getLanguages()) 

  } , [])
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default Home