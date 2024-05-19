import React,{useState} from 'react'
import { CiFileOn } from "react-icons/ci";
import { FaFolderOpen } from "react-icons/fa6";


const fileData=[
    {
        id:1,
        name:"grid-light",
        isFolder:true,
        children:[
            {
             id:2,
             name:"node_modules",
             isFolder:true,
             children:[
                {
                    id:16,
                    name:"holder",
                    isFolder:false,
                    children:[]
                },
                {
                    id:17,
                    name:"holder",
                    isFolder:false,
                    children:[]
                },
                {
                    id:18,
                    name:"holder",
                    isFolder:false,
                    children:[]
                },
                {
                    id:19,
                    name:"holder",
                    isFolder:false,
                    children:[]
                },
             ]
            },
            {
              id:3,
              name:"public",
              isFolder:true,
              children:[]
            },
            {
              id:4,
              name:"src",
              isFolder:true,
              children:[
                
                {
                 id:5,
                 name:"index.jsx",
                 isFolder:false,
                 children:[]
                },
                {
                    id:6,
                    name:"index.jsx",
                    isFolder:false,
                    children:[]
                },
                {
                    id:7,
                    name:"index.jsx",
                    isFolder:false,
                    children:[]
                },
                {
                    id:8,
                    name:"index.jsx",
                    isFolder:false,
                    children:[]
                },
                {
                    id:15,
                    name:"holder",
                    isFolder:true,
                    children:[]
                },
              ]
            },


        ]
    }
]

const Comment=({data})=>{
    const [click,setClick]=useState(true);
    return(
        <>
        {
            data.isFolder?
             <div onClick={()=>setClick(false)} className='flex items-center space-x-1'>
            
               <FaFolderOpen className='' size={"1rem"}/> 
                <span>{data.name}</span>
               </div>
            
              :
             (click?<div className='flex items-center space-x-1 border-l-[.5px]'>
                <CiFileOn className='' size={"1.2rem"}/> 
                <span>{data.name}</span>
             </div>:"")
          }
          </>
    )
}

const CommentComp=({data})=>{
   
    return(
      <>
        {
            data.map((data)=>{
                return(
                   <div key={data.id}>
                     <Comment data={data}/> 
                     <div>
                        <CommentComp data={data.children}/>
                     </div>
                   </div>
                )
            })
        }
      </>
    )
}


const FileExplorer = () => {
  return (
    <div className='bg-slate-700 h-[100vh] w-[15%] text-white px-2'>
      <div>
         <CommentComp data={fileData}/>
      </div>
     </div>
  )
}

export default FileExplorer
