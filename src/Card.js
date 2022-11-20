import React from "react";
import jobListing from "./List";

export default function Card() {
  return (
    <div className="container">
      {jobListing.map((job) => {
        return (
          <div className="test">
            <div className="main-part">
              <div className="company-container">
                <p key={job.id}> {job.company}</p>
                <p key={job.id}> {job.new}</p>
                <p key={job.id}>{job.new ? <p>New</p> : ""}</p>
                <p key={job.id}>{job.featured ? <p>Featured</p> : ""}</p>
              </div>
              <div className="article2">
                <div className="location-container">
                  <div className="title-container">
                    <h3 key={job.id}>{job.position}</h3>
                  </div>

                  <div id="contain-loc">
                    <p key={job.id}>{job.postedAt}</p>
                    <p key={job.id}>{job.contract}</p>
                    <p key={job.id}>{job.location}</p>
                  </div>
                </div>
              </div>
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
