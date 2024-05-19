import React,{useEffect,useState} from 'react'
import ProductCard from './ProductCard';

const Products = () => {

   const [products,setProducts]=useState([]);
   const [page,setPage]=useState(0);

   useEffect(() => {
    getProducts();   
   }, []);

   const getProducts=async()=>{
         const data=await fetch("https://dummyjson.com/products?limit=100");
         const json=await data.json();  
         console.log(json.products);
         setProducts(json.products);
   }

  return (
    <div className='bg-gray-300 h-[100vh] w-[100vw]'>
       <div className='w-[100%] grid grid-cols-4 px-8 py-8'>
         {
           products.slice(page*10,page*10+10).map((product)=>{
             return(
                <>
                 <ProductCard key={product.id} product={product}/>
                 
                </>
             )
           }) 
         }
       
       </div>
       <div className='flex justify-between px-24'>
           <div  onClick={()=>setPage(page-1)} className={`font-bold px-4 py-2 rounded-lg bg-violet-600 ${page === 0 ? 'bg-gray-400 disabled:cursor-pointer' : 'bg-violet-600 cursor-pointer'}`}>Prev</div>
            {
                [...Array(products.length/10)].map((_,i)=>{
                    return <div onClick={()=>setPage(i)} className={`border flex items-center justify-center text-white font-bold border-black h-12 w-12  ${page==i?"bg-red-500":"bg-white text-black"}`}>{i+1}</div>
                })
            }
            <div onClick={()=>setPage(page+1)} className={`font-bold px-4 py-2 rounded-lg bg-violet-600`}>Next</div>
        </div>
    </div>
  )
}

export default Products;
