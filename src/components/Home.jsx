/** @format */

import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const ele = useRef(null);
  const paragraphs = useRef([]);
  return (
    <div className="w-50 border border-primary shadow box-shadow">
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
      <p>text1</p>
      <p>text2</p>
      <p>text3</p>
      <p>text4</p>
      <Outlet />
    </div>
  );
}

export const LeftComponent = () => {
  return <h1>This is left component</h1>;
};
export const RightComponent = () => {
  return <h1>This is right component</h1>;
};
