import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../utils/cartSlice';

const HomePage = () => {
   
    const [products,setProducts]=useState([]);
    
    const dispatch=useDispatch();

    useEffect(() => {
        getItemDetails();
    }, []);
    const getItemDetails=async()=>{
        const data=await fetch("https://fakestoreapi.com/products");
        const json=await data.json();
        setProducts(json);
    }

    const handleAddCart=(data)=>{
        dispatch(addItemToCart(data));
    }

  return (
    <div>
       {
        products.length!=0?
        <div className='grid grid-cols-3 px-12 py-12 gap-4'>
            {
               products.map((data,index)=>{
                return(
                    <div key={index} className='px-4 py-4 shadow-xl bg-gray-200 flex flex-col items-center justify-center'>
                       <img className='h-[300px] w-[300px]' src={data.image} alt={data.id} />
                       <h3 className='text-black font-bold'>{data.category}</h3>
                       <button onClick={()=>handleAddCart(data)} className='text-black font-bold'>Add Cart</button>
                    </div>
                )
               }) 
            }
       </div>:""
       }
    </div>
  )
}

export default HomePage
