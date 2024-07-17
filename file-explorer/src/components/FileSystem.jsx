import React, { useState } from 'react'
import fileData from '../utils/fileData'
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";




const Comp=({comment,expand,setExpand})=>{
    const handleClick=()=>{
        setExpand(!expand);
    }
    return (
         <div onClick={handleClick} className='flex items-end text-white text-[.9rem] py-[1px] cursor-pointer'>
            {comment.isFolder ? <> {expand ? <FaAngleDown className='font-thin text-[.9rem]'/> : <FaAngleRight className='font-thin text-[.9rem]' /> } <CiFolderOn size={'1.2rem'} /> </>: <CiFileOn size={'1.2rem'}/>}
            {comment.name}
       </div>
    )
}
const Comment = ({ commentData }) => {

    const [expand,setExpand]=useState(false);
    

    return (
        <div>
            {
                commentData.map((comment, index) => {
                    return (
                        <>
                         <Comp key={index} comment={comment} expand={expand} setExpand={setExpand}/>
                         {
                          expand?  
                          <div className='pl-2 border-l-[.2px] border-gray-700'>
                            <Comment commentData={comment.child}/>
                          </div>:""
                         }
                        </>

                    )
                })
            }
        </div>
    )
}

const FileSystem = () => {

    return (
        <div className='w-[15%] h-[100%] bg-gray-900'>
            <div className='px-2'>
                <Comment commentData={fileData} />
            </div>
        </div>
    )
}

export default FileSystem
