/** @format */

import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const ele = useRef(null);
  return (
    <>
      <h1 ref={ele}>Home</h1>
      <button
        onClick={() => {
          ele.current.classList.toggle("text-danger");
        }}>
        Change Style
      </button>

      <Link to="left">
        <button>Left</button>
      </Link>
      <Link to="right">
        <button>Right</button>
      </Link>
      <Outlet />
    </>
  );
}

export const LeftComponent = () => {
  return <h1>This is left component</h1>;
};
export const RightComponent = () => {
  return <h1>This is right component</h1>;
};
