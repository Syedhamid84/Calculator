import React from "react";
import { useState } from "react";
import ButtonNumbers from "./ButtonValues";
const Callbutton = () => {
  const [InputValues, setInputValues] = useState("");

  const HandleInput = (value) => {
    console.log("input values", value);
    setInputValues((prevInputValue) => prevInputValue + value);

    console.log("hello world");
  };
  const HandleClear = ()=>{
    setInputValues("");
  }
  const EvaluateExpression =()=>{
    try{
      const result = eval(InputValues);
      setInputValues(result.toString());
    }
    catch{
      setInputValues("Error");
    }
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col h-[100vh] bg-yellow-300">
        {/* <div className="w-64 h-12 bg-pink-100"> </div> */}
        <input
          className="w-64 h-12 bg-pink-100"
          type="text"
          value={InputValues}
          readOnly
        />

        <div className="grid grid-cols-4 gap-4 gap-x-4 bg-green-300 p-2">
          {ButtonNumbers.map((value, index) => (
            <button
              key={index}
              className=" w-12 h-12 bg-black text-[#FFFFFF]"
              // onClick={()=>HandleInput(value)}
                        onClick={() => {
                if (typeof value === "number" || value === ".") {
                  HandleInput(value.toString());
                } else if (value === "C") {
                  HandleClear();
                } else {
                  HandleInput(` ${value} `);
                }
                if(value === "="){
                  EvaluateExpression();
                }
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Callbutton;
