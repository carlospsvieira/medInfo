import React, { useContext } from "react";
import { Context } from "../context/StateProvider";
import logo from "../images/logo.png";

function Results() {
  const { medInfo, ref } = useContext(Context);

  return (
    <div
      id="result"
      ref={ref}
      className="flex items-center bg-slate-100 justify-center gap-40 h-screen pt-16"
    >
      {medInfo.length === 0 ? (
        <h2 className="text-2xl">Your search result will appear here.</h2>
      ) : (
        medInfo?.map((med, index) => (
          <div
            key={index}
            className="text-justify shadow-md px-8 py-16 bg-slate-50 result-card mx-2"
          >
            <h2 className="text-2xl font-bold mb-2">Product Info:</h2>
            <p>
              <span className="font-bold">Brand Name:</span> {med.brand_name}
            </p>
            <p>
              <span className="font-bold">Active Ingredients: </span>
              {med.active_ingredients?.map((ingredient, index) => (
                <div key={index}>
                  <span>{ingredient.name}</span>
                  {" - "}
                  <span>{ingredient.strength}</span>
                </div>
              ))}
            </p>
            <p>
              <span className="font-bold">Manufacturer:</span>{" "}
              {med.labeler_name}*
            </p>
            <p>
              {" "}
              <span className="font-bold">Dosage Form:</span> {med.dosage_form}
            </p>
            <p>
              {" "}
              <span className="font-bold"> Route: </span>
              {med.route[0]}
            </p>
            <p className="text-sm mt-2 mb-1">
              <span className="text-pink-700"> ATTENTION: </span>Always look for
              a qualified physician before taking any medication.
            </p>
            <p className="text-xs">
              *It may change depending on when and where you're located.
            </p>
          </div>
        ))
      )}
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Results;
