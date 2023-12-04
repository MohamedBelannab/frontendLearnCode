import React from 'react'
import Particle from '../../assets/particles'

const HeadLanguage = () => {
  return (
    <div className='relative h-[200px] sm:h-[300px] '>
    <Particle /> 
    <div  className=' w-full md:top-[40px] sm:top-[96px]   left-0 top-[50px]    absolute z-30 '>
      <div className='container  z-30  mx-auto px-4 '>
        <section className=' flex items-center justify-center'>
          <div className='hidden md:block'>
            <img className='w-full md:w-48 lg:w-56' src="https://www.programiz.com/sites/all/themes/programiz/assets/python.svg" alt="Python programming language logo" />
          </div>
          <div className='grow flex items-center justify-center'>
            <svg className='head' viewBox="0 0 1320 300">
              <text className='capitalize text-[7.4rem]' x="50%" y="50%" dy=".35em" textAnchor="middle">
                Learn Python
              </text>
            </svg>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default HeadLanguage