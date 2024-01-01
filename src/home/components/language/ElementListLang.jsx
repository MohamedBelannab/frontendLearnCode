import React from 'react'

const ElementListLang = ({titre , list}) => {
  const listElement = JSON.parse(list.length > 0 && list)
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>{titre}</h1>
        <div>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          {
            listElement.length > 0 ?
            listElement.map((e)=>(
              <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {e}
            </li>
            )) : 
            <li className="flex items-center">
              <svg
                className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Not have Frameworks
            </li>

          }  
        </ul>
        </div>
      </div>
  )
}

export default ElementListLang