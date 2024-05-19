import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='w-[100%] h-[60px] bg-violet-500'>
        <div className='flex justify-between px-12 items-center  h-[60px]'>
            <div>
                <h1 className='font-bold text-white'>Shopping</h1>
            </div>
            <div>
                <input className='border rounded-sm px-8 outline-none' type="text" />
            </div>
            <div>
            <h1 className='font-semibold text-white'>
                <Link to={"/cart"}>Cart</Link>
            </h1>
            </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Header
