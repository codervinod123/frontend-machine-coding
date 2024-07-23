import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa6";


const Faq = ({que}) => {
   
  const [toggle,setToggle]=useState([]);
  const handleClick=(id)=>{
    if(toggle.includes(id)){
      setToggle([]);
      return;
    }
    setToggle([id])
  }

  return (
    <div className='text-white border text-center  flex flex-col items-center gap-y-2 py-4'>
       {
         que.map((data)=>{
            return (
                <div className='border w-[60%] max-w-[60%] py-4 bg-slate-700 px-8 rounded-lg flex flex-col items-center'>
                   <div onClick={()=>handleClick(data.id)} className='flex items-center'>
                      <p  className='text-[1.3rem] font-semibold'>{data.que}</p>
                      <FaPlus />
                   </div>
                  { toggle.includes(data.id) ? <p className=''>{data.ans}</p>:""}
                </div>
            )
         })
       }
    </div>
  )
}

export default Faq