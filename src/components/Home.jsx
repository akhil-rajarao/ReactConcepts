/** @format */

import React, { useContext, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import GetapiHook from "../utilities/GetapiHook";
import { context } from "../App";

export default function Home() {
  const products = useContext(context);
  const ele = useRef(null);
  const ptags = useRef([]);
  const productsList = GetapiHook("https://fakestoreapi.com/products");
  console.log(productsList);

  const ChangeStyling = (e) => {
    for (let x of ptags.current) {
      x.classList.remove("text-danger");
      x.classList.add("text-secondary");
      x.classList.remove("bg-info");
    }
    e.target.classList.remove("text-secondary");
    e.target.classList.add("text-danger");
    e.target.classList.add("bg-info");
  };
  const ProductsMapping = () => {
    if (!productsList || productsList.length === 0) {
      return (
        <div
          class="spinner-border text-primary"
          role="status"></div>
      );
    }
    return productsList.map((item, index) => (
      <p
        className="mt-2 text-secondary cursor-pointer"
        key={index}
        ref={(el) => (ptags.current[index] = el)}
        onClick={(p) => ChangeStyling(p)}>
        {item?.title}
      </p>
    ));
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
      <Outlet />
      <p className="mt-3">{products?.title.toUpperCase()}</p>
      {ProductsMapping()}
    </div>
  );
}

export const LeftComponent = () => {
  return <h1>This is left component</h1>;
};
export const RightComponent = () => {
  return <h1>This is right component</h1>;
};
