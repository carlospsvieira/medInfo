import React, { useContext } from "react";
import { Context } from "../context/StateProvider";
import logo from "../images/logo.png";

function Results() {
  const { medInfo } = useContext(Context);

  return (
    <div className="flex items-center bg-slate-100 justify-center gap-40 h-screen pt-16">
      {medInfo.length === 0 ? (
        <p className="text-2xl">Your search result will appear here.</p>
      ) : (
        medInfo?.map((med, index) => (
          <div key={index} className="text-justify shadow-md px-8 py-16 bg-slate-50">
            <h2 className="text-2xl font-bold mb-2">Product Info:</h2>
            <p>
              <span className="font-bold">Brand Name:</span> {med.brand_name}
            </p>
            <p>
              <span className="font-bold">Active Ingredients:</span>{" "}
              <span>{`${med.generic_name} - `}</span>
              <span>{med.active_ingredients[0].strength}</span>
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
              <span className="text-pink-700"> ATTENTION: </span>Always look for a qualified physician before taking any
              medication.
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
