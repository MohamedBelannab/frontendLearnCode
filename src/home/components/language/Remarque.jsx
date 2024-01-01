import React from 'react'

const Remarque = ({remarque}) => {
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Remarque</h1>
        <div>
          <p>
            {remarque}
          </p>
        </div>
    </div>
  )
}

export default Remarque