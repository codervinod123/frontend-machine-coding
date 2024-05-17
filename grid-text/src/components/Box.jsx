import React,{useState} from 'react'

const Box=({handleBoxClick,id,active})=> {

  const [clicked,setClicked]=useState(false);
  console.log(active.includes(4));
  
  return (
    <div onClick={()=>handleBoxClick(id)} className='flex justify-center items-center h-[50vh] w-[50vw] bg-green-500 border-2 border-black'>
         {active.includes(id)?<h1>Clicked</h1>:""}     
    </div>
  )
}

export default Box
