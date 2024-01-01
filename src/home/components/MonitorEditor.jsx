// MyEditor.js
import React, { useState, useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import api from '../../api/api';
import * as monaco from 'monaco-editor';
import { motion } from 'framer-motion';
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import axios from 'axios';

const editorOptions = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
  theme: 'vs-dark',
};

const languageHighlightKeywords = {
  python: 'print',
  javascript: 'console.log()',
  java: 'System.out.println',
  c: 'printf',
  php : 'echo' 
};

// const listLanguage = ['python' , 'javascript' , 'java' , 'c']

const MyEditor = () => {
  const [code, setCode] = useState(`#Online Python compiler (interpreter) to run Python online.
#Write Python 3 code in this  editor and run it.
print("Hello world")`);
  const [output, setOutput] = useState('');
  const decorationsRef = useRef([]);
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const executeCode = async (language, code) => {
    try {
      const response = await axios.post('http://localhost:3001/execute', {
        language,
        code,
      } , {
        withCredentials: true
      });

      setOutput(response.data);
    } catch (error) {
      console.error('Error executing code:', error);
      setOutput('Error executing code.');
    }
  };

  const handleRunCode = () => {
    executeCode(selectedLanguage, code);
  };

  const handleHighlightCode = (language, keyword) => {
    const model = monaco.editor.getModel(); // Get the editor model

    if (!model) {
      console.error('Editor model not found.');
      return;
    }

    // Clear existing decorations
    decorationsRef.current = model.deltaDecorations(decorationsRef.current, []);

    // Find all occurrences of the specified keyword in the code
    const matches = model.findMatches(keyword, true, false, false, null, true);

    // Map matches to decorations
    const decorations = matches.map((match) => ({
      range: match.range,
      options: { inlineClassName: 'highlighted-code' },
    }));

    // Apply decorations
    decorationsRef.current = model.deltaDecorations(decorationsRef.current, decorations);
  };

  const handleCodeChange = (newValue) => {
   
    setCode(newValue);
    handleHighlightCode(selectedLanguage, languageHighlightKeywords[selectedLanguage]);
  };

  const handleLanguageChange = (event) => {
    if (event == 'python') {
      setOutput('')
      setCode(`#Online Python compiler (interpreter) to run Python online.\n#Write Python 3.8 code in this  editor and run it.\nprint("Hello world")`)
    }

    if (event == 'javascript') {
      setOutput('')
      setCode(`// Online Javascript Editor .\n// Write, Edit and Run your Javascript code using JS Online Compiler .\nconsole.log("Welcome to learnCode!");`)
      
    }

    if (event == 'c') {
      setOutput('')
      setCode(`// Online C compiler to run C program online\n#include <stdio.h>\nint main() {
        // Write C code here
        printf("Hello world");
    
        return 0;\n}
      `)
    }

    if(event == 'php'){
      setOutput('')
      setCode(`<?php\n// Online PHP compiler to run PHP program online\n// Print "Hello World!" message\necho "Hello World!";\n?>`)
    }
    setSelectedLanguage(event);
    console.log('ok');

  };

  return (

    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed w-full"
  >
    <div className='grid grid-cols-2 w-full bg-[#343541] py-2 text-white  mb-[0.6px] '>
      <div className='flex px-5  items-center  justify-between'>
        <div className=" flex gap-x-1.5">
            <button onClick={()=>{handleLanguageChange('python') }} className='border-2 border-gray-500 border-opacity-25 py-2 px-3'>
            <FaPython className='text-[23px]' />
            </button>
            <button onClick={()=>{handleLanguageChange('javascript')}} className='border-2 border-gray-500 border-opacity-25 px-3 '>
            <IoLogoJavascript className='text-[23px]' />
            </button>
            <button onClick={()=>{handleLanguageChange('java')}} className='border-2 border-gray-500 border-opacity-25 px-3'>
            <FaJava className='text-[23px]' />
            </button>
            <button onClick={()=>{handleLanguageChange('c')}} className='border-2 border-gray-500 border-opacity-25 px-3'>
            <span className='text-[23px] font-extrabold ' > c</span>
            </button>
            <button onClick={()=>{handleLanguageChange('php')}} className='border-2 border-gray-500 border-opacity-25 px-3'>
              <FaPhp className='text-[23px] font-extrabold ' />
            </button>
      </div>
      <button
        onClick={handleRunCode}
        className="bg-purple-500 text-sm mr-4    text-white px-4 py-2  hover:bg-purple-600 focus:outline-none"
      >
        <img src="https://www.programiz.com/c-programming/online-compiler/assets/icons/play.svg" alt="" />
      </button>
      </div>
      
      <div className='flex   items-center  justify-between'>
      <h3 className="text-sm font-semibold ml-4">Output</h3>
      <button
        onClick={()=>{setOutput('')}}
        className="bg-purple-500 text-sm mr-2    text-white px-4 py-2  hover:bg-purple-600 focus:outline-none"
      >
        Clear
      </button>
      
      </div>
    </div>
    <div className='flex '>
      <MonacoEditor
        width="50%"
        height="100vh"
        language={selectedLanguage}
        theme={editorOptions.theme}
        value={code}
        options={editorOptions}
        onChange={handleCodeChange}
        className='pt-6'
        
      />
      <div className="w-[50%] ml-[0.6px] h-[100vh] bg-[#1e1e1e]">
        <pre className="bg-[#1e1e1e] text-white p-4 h-full">{output}</pre>
      </div>
    </div>
    
  </motion.div>
  );
};

export default MyEditor;
