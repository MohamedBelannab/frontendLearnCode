import React from 'react'
import StepsLanguage from '../StepsLanguage'

const ElementGuidLang = ({Guide}) => {

  const listElement = JSON.parse(Guide)
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Guide</h1>
        <div className='pt-2'>
          <StepsLanguage Guide={listElement}/>
          
        </div>
      </div>
  )
}

export default ElementGuidLang