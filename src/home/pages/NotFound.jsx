import React from 'react'
import notFound from '../../assets/notfound.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layouts/Navbar'



const NotFound = ({navbar = true}) => {
    const navigate  = useNavigate()
  return (
    <>
    {navbar && <Navbar/>}
    <div className=' flex flex-col items-center justify-center py-12'>
        <Lottie animationData={notFound} loop autoplay className='w-[26%]'  />
        <div className='flex gap-x-4'>
            <button onClick={()=>{navigate(-1)}} className='bg-[#9400d4] py-2 px-4 text-white font-semibold text-sm'>Back</button>
            <button onClick={()=>{navigate('/')}} className='border-2 border-solid px-4  border-[#9400d4] py-2 font-semibold text-sm border-opacity-50'>Go Home</button>
        </div>
    </div>
    </>
  )
}

export default NotFound