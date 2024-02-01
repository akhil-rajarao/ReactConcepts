/** @format */

import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Page() {
  const { id, index } = useParams();
  const queryparams = useLocation();
  const TotalQueryParams = new URLSearchParams(queryparams.search);
  console.log(TotalQueryParams);

  return (
    <h1>
      Page has id {id} and index {index} posts {TotalQueryParams.get("posts")} and category is {TotalQueryParams.get("category")}
    </h1>
  );
}
