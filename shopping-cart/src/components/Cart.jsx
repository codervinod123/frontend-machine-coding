import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';


const Cart = () => {

const items=useSelector((store)=>store.cart.product)
console.log(items);

  return (
    <div>
       <div className='grid grid-cols-3 px-12 py-12 gap-4'>
         {
            items.map((data,index)=>{
               return(
                  <Card key={index} data={data}/>
               )
            })
         }
    </div>
    </div>
  )
}

export default Cart

