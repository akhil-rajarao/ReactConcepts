/** @format */

import React, { useContext } from "react";
import { context } from "../App";

export default function ContactUs() {
  const prod = useContext(context);
  return (
    <>
      {" "}
      <h1>ContactUs</h1>
      <p>{prod.price}</p>
    </>
  );
}
