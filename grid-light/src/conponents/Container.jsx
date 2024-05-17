import React,{useState} from "react";

const Container=()=>{
    const boxes=[[1,2,3],[4,5,6],[7,8,9]];
    const [clicked,SetClicked]=useState([]);

    const handleBoxClick=(index)=>{
         const dummy=[...clicked,index]
         SetClicked(dummy);

         if(clicked.length>=8){
            removeElement();
         }
    }

    const removeElement=()=>{
        const timer=setInterval(()=>{
            SetClicked((clickedItems)=>{
                 const dummyArray=clickedItems.slice();
                 dummyArray.pop();
                 if(dummyArray.length==0){
                    clearInterval(timer);
                 }
                 console.log("Hello"); 
                 return dummyArray;
                 
            })
        },500);
         
    }

    return(
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="h-[400px] w-[400px] border border-black">
              <div className="grid grid-cols-3">
              {
                boxes.flat(1).map((index)=>{
                    return(
                        <div key={index} onClick={()=>handleBoxClick(index)} className={`h-[133px] w-[133px] border border-black cursor-pointer ${clicked.includes(index)?"bg-green-500":""}`}>
                          
                        </div>
                    )
                })
               }
              </div>
            </div>
        </div>
    )
}

export default Container;