/** @format */

import React from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id, index } = useParams();
  return (
    <h1>
      Page has id {id} and index {index}
    </h1>
  );
}
