/** @format */

import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const ele = useRef(null);
  const ptags = useRef([]);

  const ChangeStyling = (e) => {
    for (let x of ptags.current) {
      x.classList.remove("text-danger");
      console.log(x.classList);
      x.classList.add("text-primary");
      x.classList.remove("bg-info");
    }
    e.target.classList.remove("text-primary");
    e.target.classList.add("text-danger");
    e.target.classList.add("bg-info");
  };

  return (
    <div className="border rounded w-50 m-auto mt-3 p-3 border-primary shadow box-shadow">
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
      <p
        className="mt-2 text-primary"
        ref={(el) => (ptags.current[0] = el)}
        onClick={(p) => ChangeStyling(p)}>
        Product1
      </p>
      <p
        className="mt-2 text-primary"
        ref={(el) => (ptags.current[1] = el)}
        onClick={(p) => ChangeStyling(p)}>
        Product2
      </p>
      <p
        className="mt-2 text-primary"
        ref={(el) => (ptags.current[2] = el)}
        onClick={(p) => ChangeStyling(p)}>
        Product3
      </p>
      <p
        className="mt-2 text-primary"
        ref={(el) => (ptags.current[3] = el)}
        onClick={(p) => ChangeStyling(p)}>
        Product4
      </p>
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
