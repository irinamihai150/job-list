import React from "react";
import jobListing from "./List";

export default function Languages() {
  return (
    <div className="language-container">
      {/* {jobListing.map(({ item, level }) => (
        <p className="role" style={{ backgroundColor: "red" }}>
          {level}
        </p>
      ))}
      {jobListing.map((employee) => (
        <ul>
          <li key={employee.languages}>{employee.languages}</li>
        </ul>
      ))} */}
      {/* <ul>
        {jobListing.map(({ item, languages }) => (
          <li style={{ backgroundColor: "pink" }}>{languages}</li>
        ))}
      </ul> */}
    </div>
  );
}
