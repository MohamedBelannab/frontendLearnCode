import React from 'react'

const WhyLearn = ({titre , WhyLearn}) => {
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Why Learn {titre}</h1>
        <div>
          <p>
            {WhyLearn}
          </p>
        </div>
    </div>
  )
}

export default WhyLearn