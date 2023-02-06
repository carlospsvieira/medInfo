import React, { useContext } from "react";
import { Context } from "../context/StateProvider";

function Results() {
  const { medInfo } = useContext(Context);

  console.log(medInfo);
  return <div>
    <h1>Result</h1>
    <p>{medInfo.brand_name}</p>
  </div>;
}

export default Results;
