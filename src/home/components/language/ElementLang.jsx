import React from 'react'

const ElementLang = ({titre , description}) => {
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>{titre}</h1>
        <div>
          <p>
            {description}
          </p>
        </div>
    </div>
  )
}

export default ElementLang