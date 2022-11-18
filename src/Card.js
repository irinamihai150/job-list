import React from "react";
import jobListing from "./List";
export default function Card() {
  return (
    <div className="container">
      {jobListing.map((job) => {
        return (
          <div>
            <div className="main-part">
              <div className="company-container">
                <p key={job.id}> {job.company}</p>
                <p key={job.id}> {job.new}</p>
                <p key={job.id}> {job.featured}</p>
              </div>

              <div className="location-container">
                <p key={job.id}>{job.postedAt}</p>
                <p key={job.id}>{job.contract}</p>
                <p key={job.id}>{job.location}</p>
              </div>
              <h2 key={job.id}>{job.position}</h2>
            </div>

            <div className="roles-container">
              <p key={job.id}>{job.role}</p>
              <p key={job.id}>{job.level}</p>
              <p key={job.id} className="languages-container">
                <ul>
                  {job.languages.map((language) => (
                    <li style={{ color: "blue" }}>{language}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
