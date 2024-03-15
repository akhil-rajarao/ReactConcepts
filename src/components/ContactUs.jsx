/** @format */

import React, { useContext, useState } from "react";
import { context } from "../App";

export default function ContactUs() {
  const prod = useContext(context);
  const [count, setCount] = useState(0);
  return (
    <>
      {" "}
      <h1>ContactUs</h1>
      <p>{prod.price}</p>
      <p>Counter {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button  onClick={() => setCount(0)}>reset</button>
    </>
  );
}
