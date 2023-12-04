
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoClipboardOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";


const Example = () => {
    const [copy , setCopy] = useState(false)

    const copyExample = () =>{
      navigator.clipboard.writeText(codeString)
      setCopy(true)
      setTimeout(()=>{
        setCopy(false)
      } , 2500)
    }
    const codeString = `import React from 'react'

    const HelloWord = () => {
      return (
        <div>HelloWord</div>
      )
    }
    
    export default HelloWord`;
  return (
    <div className='flex flex-col gap-y-5'>
        <h1 className='text-textColor text-2xl  font-extrabold'>Example</h1>
        <div className='bg-[#3a404d]  place-items-center grid rounded-md' >
        <div className='flex justify-between px-4 py-1 text-white text-xs items-center w-full'>
            <p className='text-sm'>Example Code</p>
            {
              copy ? 
              (<button className='py-1 inline-flex items-center text-xs gap-x-2'>
                <IoCheckmark className='text-white text-sm'/>
                <span>Copied ! </span>
              </button>)
              :
              (<button onClick={copyExample} className='py-1 inline-flex items-center text-xs gap-x-2'>
                <IoClipboardOutline className='text-white text-sm'/>
                <span>Copy Code </span>
              </button>)

            }
            
        </div>
        <SyntaxHighlighter customStyle={{ 
            padding : "20px" , 
            borderRadius : "5px" ,
            width : "100%"
         }} 
         wrapLongLines = {true}
         language="jsx" style={atomOneDark}>
            {codeString}
        </SyntaxHighlighter>
        </div>
      </div>
  )
}

export default Example