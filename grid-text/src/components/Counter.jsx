import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseValue,decreaseValue } from "../utils/counterSlice";

const  Counter=()=> {
 
  const data=useSelector((store)=>store.counter.val);
  

  const dispatch=useDispatch();

  const handleClick=(operator)=>{
    if(operator=='+')
     dispatch(increaseValue())
    
    if(operator=='-')
      dispatch(decreaseValue())

  } 
  return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex items-center  gap-x-4">
         
          <button 
             className="p-2 px-3 rounded border bg-gray-900 text-white" 
             onClick={() => handleClick('+')}>
               + 
          </button>

            <h1 className="font-semibold text-lg">{data}</h1>

          <button 
              className="p-2 px-3 rounded border bg-gray-900 text-white" 
              onClick={() => handleClick('-')}> 
              - 
          </button>

        </div>
      </div>
  );
}


export default Counter