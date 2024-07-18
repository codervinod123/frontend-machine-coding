import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';
import Card from './Card';

const HomePage = () => {
   
    const dispatch=useDispatch();
    const [products,setProducts]=useState([]);

    
    useEffect(() => {
        getItemDetails();
    }, []);
    const getItemDetails=async()=>{
        const data=await fetch("https://fakestoreapi.com/products");
        const json=await data.json();
        setProducts(json);
    }

  
  
  return (
    <div>
       {
        products.length!=0?
        <div className='grid grid-cols-3 px-12 py-12 gap-4'>
            {
               products.map((data,index)=>{
                return(
                   <Card key={index} data={data}/>
                )
               }) 
            }
       </div>:""
       }
    </div>
  )
}

export default HomePage
