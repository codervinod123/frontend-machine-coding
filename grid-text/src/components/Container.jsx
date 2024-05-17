import React,{ useState } from "react";
import Box from "./Box";
const emptybox=[1,2,3,4]
const Container=()=>{
    const [active,setActive]=useState([]);  
    const handleBoxClick=(id)=>{
          setActive([id]);
    }
    return(
        <div className="h-[100vh] w-[100vw] bg-gray-500">
         <div className="grid grid-cols-2">
         {
            emptybox.map((index)=>{
                return (

                    <Box key={index} handleBoxClick={handleBoxClick} id={index} active={active}/>
                )
            })
          }
         </div>
        </div>
    )
}

export default Container;