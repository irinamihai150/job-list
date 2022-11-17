import React from "react";
import jobListing from "./List";

export default function Languages() {
  return (
    <div className="language-container">
      {/* {jobListing.map((employee) => (
        <p key={employee.firstname}>
          {employee.role} {employee.level}
        </p>
      ))} */}

      {/* {jobListing.map(({ item, role }) => (
        <p className="role" style={{ backgroundColor: "yellow" }}>
          {role}
        </p>
      ))}
      {jobListing.map(({ item, level }) => (
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






//  {
//    jobListing.map(({ item, role }) => (
//      <li style={{ backgroundColor: "yellow" }}>{role}</li>
//    ));
//  }
//  {
//    jobListing.map(({ item, level }) => (
//      <li style={{ backgroundColor: "red" }}>{level}</li>
//    ));
//  }
//  {
//    jobListing.map(({ item, languages }) => (
//      <li style={{ backgroundColor: "red" }}>{languages}</li>
//    ));
//  }
