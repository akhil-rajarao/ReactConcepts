/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GetapiHook from "../utilities/GetapiHook";

export default function Home() {
  const ele = useRef(null);
  const ptags = useRef([]);
  const [products, setproducts] = useState([]);
  const GetData = async () => {
    const ProductData = await fetch("https://fakestoreapi.com/products");
    const apidata = await ProductData.json();
    setproducts(apidata);
  };
  // useEffect(() => {
  //   GetData();
  // }, []);

  const productsList= GetapiHook("https://fakestoreapi.com/products")

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
  const ProductsMapping = () => {
    return productsList.map((item, index) => (
      <p
        className="mt-2 text-primary cursor-pointer"
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
      <h1 className="text-secondary">{products?.title}</h1>
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
