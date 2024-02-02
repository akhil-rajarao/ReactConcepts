/** @format */

import   { useEffect, useState } from "react";

export default function GetapiHook(url) {
  const [prods, setprods] = useState([]);
  useEffect(() => {
    getProductsApi();
  });
  const getProductsApi = async () => {
    const productsArray = await fetch(url);
    const prodcuts = await productsArray.json();
    setprods(prodcuts);
  };

  return prods;
}
