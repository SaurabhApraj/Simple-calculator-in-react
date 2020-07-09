import React from "react";
import { add, sub, div, multi } from "./Calc";

function App() {
  return (
    <>
      <ul>
        <li>Addition is : {add(40, 4)}</li>
        <li>Subtraction : {sub(40, 4)}</li>
        <li>Division is : {div(40, 4)}</li>
        <li>Multiplication is : {multi(40, 4)}</li>
      </ul>
    </>
  );
}

export default App;
