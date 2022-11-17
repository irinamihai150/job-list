import React from "react";
import jobListing from "./List";
export default function Card() {
  const props = jobListing;
  return (
    <div className="container">
      <div className="card-container">
        {Object.values(jobListing).map(({ index, value }) => {
          console.log(jobListing);
          console.log(index);
          return (
            <div>
              <p key={index}>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
