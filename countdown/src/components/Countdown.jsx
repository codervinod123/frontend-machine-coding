import React, { useEffect, useState } from 'react'

const Countdown = () => {

    const [hour,setHour]=useState(0)
    const [minute,setMinute]=useState(0)
    const [second,setSecond]=useState(0)
    const [isRunning,setIsRunning]=useState(false);

    const handleSubmit=(e)=>{
         e.preventDefault();
         setIsRunning(!isRunning);
    }

    const runTimer=(hour,minute,second,isRunning)=>{
         if(second>0){
            setSecond((prev)=>{
                return prev-1;
            })
         }
         else if(second==0 && minute>0){
            setMinute((prev)=>{
                return prev-1;
            })
            setSecond(59);
         }
         else if(minute==0 && hour>0){
            setHour((prev)=>{
                return prev-1;
            })
            setMinute(59);
         }
    }

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
                runTimer(hour,minute,second,isRunning);
            },100)
        }
    },[hour,minute,second,isRunning])

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
       <div>
       {
          isRunning ?
         
         <div className='flex'>
             <div className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold flex items-center justify-center'>
                {hour}
             </div>
             <div className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold flex items-center justify-center'>
                {minute}
             </div>
             <div className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold flex items-center justify-center'>
                {second}
            </div>
            
            <button  className='mx-4 bg-purple-700 rounded-lg px-4 font-semibold text-white'>Pause</button>
            <button  className='mx-4 bg-purple-700 rounded-lg px-4 font-semibold text-white'>Reset</button>
         
          </div>
        
           :

          <form onSubmit={handleSubmit} className='flex gap-4 '>
              <input 
                 type="number" 
                 placeholder='HH' 
                 name='hour'
                 onChange={(e)=>setHour(e.target.value)}
                 className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold text-center' 
             />

              <input 
                  type="number" 
                  placeholder='MM' 
                  name='minute'
                  onChange={(e)=>setMinute(e.target.value)}
                  className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold text-center' 
              />
             
              <input
                  type="number" 
                  placeholder='SS' 
                  name='second'
                  onChange={(e)=>setSecond(e.target.value)}
                  className='border-2 border-gray-800 w-[50px] h-[50px] font-semibold text-center' 
             />

              <button type='sumbit' className='mx-4 bg-purple-700 rounded-lg px-4 font-semibold text-white'>START</button>
          </form>  
         }

       </div>
    </div>
  )
}

export default Countdown
