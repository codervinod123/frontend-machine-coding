import React,{useState} from 'react'

import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


const FileSystem = ({files}) => {

    const [toggle,setToggle]=useState(false);

    return (
        <div className='w-[15%] bg-gray-900'>
                <div onClick={()=>setToggle(!toggle)} className='gap-x-4 text-white px-2 flex cursor-pointer mx-2 border-l border-white'>
                       <div>
                          {files.isFolder?  <CiFolderOn size={'1.2rem'} /> : <CiFileOn size={'1.2rem'}/> }
                       </div>
                      <span>
                          {files.name}
                      </span>
                </div>
        
              {
                toggle &&
               files.child.map((data)=>{
                return(
                  <FileSystem files={data}/>
                )
               })
            }
        </div>
    )
}

export default FileSystem
