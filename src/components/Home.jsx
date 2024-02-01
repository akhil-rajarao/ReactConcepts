/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <Link to="left"><button>Left</button></Link>
      <Link to="right"><button>Right</button></Link>
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
