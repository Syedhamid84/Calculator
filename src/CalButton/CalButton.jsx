import React from "react";
import { useState } from "react";
import ButtonNumbers from "./ButtonValues";
import CalculatorBackground from "../../src/assets/bgcal3.jpg";
const Callbutton = () => {
  const [InputValues, setInputValues] = useState("0");

  const HandleInput = (value) => {
    console.log("input values", value);
    setInputValues((prevInputValue) => prevInputValue + value);
  };
  const HandleClear = () => {
    setInputValues("");
  };
  const EvaluateExpression = () => {
    try {
      const result = eval(InputValues);
      setInputValues(result.toString());
    } catch {
      setInputValues("Error");
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${CalculatorBackground})` }}
        className="flex justify-center items-center max-w-screen h-[100vh] bg-cover ">

        <div className="w-72 flex justify-center items-center h-[400px] gap-4 flex-col bg-[#b37e39] rounded-lg  ">
          <input
            className="w-64 h-16 bg-pink-100 px-4 py-6 text-right rounded-md"
            type="text"
            value={InputValues}
            readOnly
          />

          <div className="grid grid-cols-4 gap-4  bg-[#838578] px-4 py-6 rounded-md max-w-64">
            {ButtonNumbers.map((value, index) => (
              <button
                key={index}
                className=" w-12 h-12 bg-black text-[#998f74] hover:text-[#FFFFFF] rounded-md border-b-2 border-[#998f74] hover:border-[#FFFFFF] "
                onClick={() => {
                  if (typeof value === "number" || value === ".") {
                    HandleInput(value.toString());
                  } else if (value === "C") {
                    HandleClear();
                  } else {
                    HandleInput(` ${value} `);
                  }
                  if (value === "=") {
                    EvaluateExpression();
                  }
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};
export default Callbutton;
