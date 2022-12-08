import React from "react";
import jobListing from "./List";


export default function Card() {
  
  return (
    <div className="card-container">
      {jobListing.map((job) => {
        return (
          <div className="card">
            <div className="article">
              <img alt = "logo"  className = "img" src = {job.logo}/>

              <div className="job-list-details">
                <div className="company-details">
                  <p className="company-name" key={job.id}>
                    {" "}
                    {job.company}
                  </p>
                  <p key={job.id}> {job.new}</p>
                  <p key={job.id} className="new">
                    {job.new ? <p>New</p> : ""}
                  </p>
                  <p key={job.id} className="featured">
                    {job.featured ? <p>Featured</p> : ""}
                  </p>
                </div>
                <div className="sub-article">
                  <h3 key={job.id} className="position-container">
                    {job.position}
                  </h3>
                  <div id="contain-loc">
                    <p key={job.id} className="posted-container">
                      {job.postedAt}
                    </p>

                    <p key={job.id} className="contract-container">
                      {job.contract}
                    </p>
                    <p key={job.id} className="location-container">
                      {job.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="roles-container">
              <p key={job.id} className="role-container">
                {job.role}
              </p>
              <p key={job.id} className="level-container">
                {job.level}
              </p>
              <p key={job.id} className="languages-container">
                <ul>
                  {job.languages.map((language) => (
                    <li>{language}</li>
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
