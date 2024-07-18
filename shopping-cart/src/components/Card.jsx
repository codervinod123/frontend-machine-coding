import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';


const Card = ({data}) => {
    const dispatch=useDispatch();
    const handleAddCart=(data)=>{
        dispatch(addItems(data));
    }
    return (
        <div>
            <div key={data.id} className='px-4 py-4 shadow-xl bg-gray-200 flex flex-col items-center justify-center'>
                <img className='h-[300px] w-[300px]' src={data.image} alt={data.id} />
                <h3 className='text-black font-bold'>{data.category}</h3>
                <button onClick={() => handleAddCart(data)} className='text-black font-bold'>Add Cart</button>
            </div>
        </div>
    )
}

export default Card