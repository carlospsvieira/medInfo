import React, { useContext } from "react";
import { Context } from "../context/StateProvider";

function Results() {
  const { medInfo } = useContext(Context);

  return (
    <div>
      { medInfo.length === 0 ? (
        <p>Your search result will appear here.</p>
      ) : (
        medInfo?.map((med, index) => (
          <div key={index}>
            <h1>Product Info:</h1>
            <p>Brand Name: {med.brand_name}</p>
            <p>
              Active Ingredients: <span>{`${med.generic_name} - `}</span>
              <span>{med.active_ingredients[0].strength}</span>
            </p>
            <p>Manufacturer: {med.labeler_name}*</p>
            <p>Dosage Form: {med.dosage_form}</p>
            <p>Route: {med.route[0]}</p>
            <p className="text-sm">
              ATTENTION: Always look for a qualified physician before making use of any medication.
            </p>
            <p className="text-xs">
              *It may change depending on when and where your search was done.
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Results;
