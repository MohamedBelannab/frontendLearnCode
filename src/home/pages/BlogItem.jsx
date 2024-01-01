import React from 'react'
import ElementLang from '../components/language/ElementLang'
import Navbar from '../layouts/Navbar'
import { useEffect } from 'react'
import { getBlog } from '../../slices/blogSlice'
import { useParams } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

const BlogItem = () => {
    const { data , status } = useSelector((state) => state.blog);
    let { slug } = useParams();
    const dispatch = useDispatch() ;
    const parseAndRenderContent = () => {
        return data && data.content.split('\n').map((paragraph, index) => {
          const isTitle = paragraph.trim().startsWith('##');
          const Tag = isTitle ? 'h1' : 'p';
    
          const titleStyle = isTitle
            ? 
            'text-textColor text-2xl py-4  font-extrabold'
            : '';
    
          return  <Tag key={index} className={titleStyle}>{isTitle ? paragraph.replace(/##/g, '').trim() : paragraph}</Tag>;
        });
      };
    useEffect(()=>{
            dispatch(getBlog(slug))
    } , [])
  return (
    <div>
        <Navbar/>
        <div className='w-full py-16 capitalize  bg-blue-100 px-4 flex justify-around items-center '>
            <h1 className=' text-textColor font-bold  text-3xl'>{data && data.title}</h1>
            <div>
                <img className='w-full md:w-48 lg:w-56' src={data && data.img} alt={data.title} />
            </div>
        </div>
        <div className='container mx-auto w-11/12 sm:w-3/4 md:w-[70%] lg:w-1/2 px-4 py-9 md:py-20 '>
            {data && status=='success' && parseAndRenderContent()}
            <hr />
            <ElementLang titre='remarque' description={data.remarque}/>
        </div>
    </div>
  )
}

export default BlogItem