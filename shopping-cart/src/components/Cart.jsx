import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import cartSlice from '../utils/cartSlice'






const Cart = () => {

 const [prod,setProd]=useState([]);

 const data=useSelector((store)=>store.cartSlice.Cart)
 
 useEffect(()=>{
    setProd(data);
    console.log(prod);
 },[prod])

  return (
    <div>
        cart
        {/* {
           cart.map((data)=>{
            return  (
                <div key={index} className='px-4 py-4 shadow-xl bg-gray-200 flex flex-col items-center justify-center'>
                   <img className='h-[300px] w-[300px]' src={data.image} alt={data.id} />
                   <h3 className='text-black font-bold'>{data.category}</h3>
                   <button onClick={()=>handleAddCart(data)} className='text-black font-bold'>Add Cart</button>
                </div>
            )
           })  
        } */}
    </div>
  )
}

export default Cart

