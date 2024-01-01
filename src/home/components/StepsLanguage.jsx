import React from 'react'

const StepsLanguage = ({Guide}) => {
    const first = Guide[0];
    const firstFiveElements = Guide.slice(1, 5); // Use 6 as the ending index to get 5 elements
    const AnotherEle = Guide.slice(5)
    console.log(AnotherEle);
  return (
    <div className='flex  justify-around  sm:flex-row flex-col'>
       <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">

        
        <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <svg
            className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
        </span>
        <h3 className="font-medium leading-tight">{first}</h3>
        <p className="text-sm">Step details here</p>
        </li>
        {
            firstFiveElements.map((e) => ( <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
            >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
            </span>
            <h3 className="font-medium leading-tight">{e}</h3>
            <p className="text-sm">Step details here</p>
        </li>))
        }
       
    
    
        </ol> 
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">

        
        {
            AnotherEle.map((e) => ( <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
            >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
            </span>
            <h3 className="font-medium leading-tight">{e}</h3>
            <p className="text-sm">Step details here</p>
        </li>))
        }
        <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-700">
            <svg
                className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
            >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
            </span>
            <h3 className="font-medium leading-tight">End</h3>
            <p className="text-sm">Step details here</p>
        </li>
        
    
    
        </ol> 
    </div>
    
  )
}

export default StepsLanguage