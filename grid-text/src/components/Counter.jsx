
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter,increaseCounter } from "../utils/counterSlice";
import { useSelector } from "react-redux";
import counterSlice from "../utils/counterSlice"

import store from "../utils/store";

const  Counter=()=> {
    const dispatch=useDispatch();
  
  const handleClick = (flag) => {
    if (flag == "+") {
        dispatch(increaseCounter());
    }
    if (flag == "-") {
        dispatch(decreaseCounter());
    }
  };

  const counter=useSelector((store)=>store.appSlice.Counter);
  

  
  return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex  gap-x-4">
          <button className="p-2 border bg-gray-900 text-white" onClick={() => handleClick("+")}> + </button>
          {counter}
          <button className="p-2 border bg-gray-900 text-white" onClick={() => handleClick("-")}> - </button>
        </div>
      </div>
  );
}


export default Counter