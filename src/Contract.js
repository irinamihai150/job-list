import React from 'react'
import jobListing from './List';

export default function Contract() {
  return (
    <div>
      <ul>
        {jobListing.map(({ item, contract }) => (
          <li style={{ backgroundColor: "blue" }}>{contract}</li>
        ))}
        {jobListing.map(({ item, location }) => (
          <li style={{ backgroundColor: "green" }}>{location}</li>
        ))}
        {jobListing.map(({ item, postedAt }) => (
          <li style={{ backgroundColor: "grey" }}>{postedAt}</li>
        ))}
      </ul>
    </div>
  );
}
