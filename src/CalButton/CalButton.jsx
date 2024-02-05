import React from "react";
import { useState } from "react";
const Callbutton = () => {
  const [InputValues, setInputValues] = useState()

  const state = {
    displayvalue: "",
  };

  const HandleInput = (value) =>{
    
    console.log("input values", value);
    setInputValues(value);
    console.log("hello world")

  }
  return (
    <>
      <div className="flex justify-center items-center flex-col h-[100vh] bg-yellow-300">
        {/* <div className="w-64 h-12 bg-pink-100"> </div> */}
        <input 
        className="w-64 h-12 bg-pink-100"
        type="text"
        value={InputValues}
        />
        <div className="grid grid-cols-4 gap-4 gap-x-4 bg-green-300 p-2">
          <button className=" w-12 h-12 bg-black text-[#FFFFFF] "
          // onChange={setInputValues}
          onClick={()=>HandleInput(7)}
          >7</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(8)}>
            8</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(9)}>
            9</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput("+")}>
            +</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(4)}>
            4</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(5)}>
            5</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(6)}>
            6</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput("-")}>
            -</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(1)}>
            1</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(2)}>
            2</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(3)}>
            3</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput("*")}>
            *</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput()}>
            C</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput(0)}>
            0</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput("=")}>
            =</button>
          <button className=" w-12 h-12 bg-black text-[#FFFFFF]" 
          onClick={()=>HandleInput("/")}>
            /</button>
        </div>
      </div>
    </>
  );
};
export default Callbutton;
