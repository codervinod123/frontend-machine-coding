import React,{useEffect,useState} from 'react'

const MainCOntainer = () => {

    const [products,setProducts]=useState([]);
    const [page,setPage]=useState(0);


    useEffect(()=>{
        getItems();
    },[])

    const getItems=async()=>{
          try {
             const data=await fetch("https://dummyjson.com/products?limit=100");
             const json=await data.json();
             setProducts(json.products);
          } catch (error) {
              console.log('error occured');
             throw {error}
          }
    }

    
   
  return (
    <div>
          <div className='flex flex-wrap  gap-8 justify-center'>
              {
                products.slice(page*10,page*10+10).map((data)=>{
                    return(
                        <div key={data.id} className='h-[300px] w-[300px] border border-black p-4'>
                          <img src={data.images[0]} alt={data.images[0]} />
                          <p>{data.title}</p>
                          <p>{data.price}</p>
                        </div>
                  )
                })
              }

          </div>

          <div className='flex justify-center py-12 gap-x-3'>
          <button disabled={page<=0?true:false}  onClick={()=>setPage(page-1)} className='px-3 py-1 bg-purple-600 scroll-smooth' >Decrese</button>
            {
                [...Array(products.length/10)].map((item,index)=>{
                     return(
                        <>
                        {
                         index==page?  
                         <button className='bg-red-500 flex justify-center items-center h-[40px] w-[40px] border p-2'>
                            {index+1}
                         </button>:
                         <button className='flex justify-center items-center h-[40px] w-[40px] bg-purple-600 border p-2'>
                          {index+1}
                        </button>
                        }
                        </>
                     )
                })
            }
            <button  disabled={page>8?true:false} onClick={()=>setPage(page+1)}  className='px-3 py-1 bg-purple-600 scroll-smooth'>Increase</button>
         </div>

    </div>
  )
}

export default MainCOntainer
