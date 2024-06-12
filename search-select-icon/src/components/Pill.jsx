import React from 'react'

const Pill = ({data}) => {
  return (
    <div className='px-1 rounded-full bg-violet-500 flex items-center justify-center text-[16px]'>
      <span className=''>
       {data.firstName}
     </span>
     <span className='text-white font-bold px-2'>X</span>
     </div>
  )
}

export default Pill
