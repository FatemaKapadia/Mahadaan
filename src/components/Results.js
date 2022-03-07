import React, { useEffect } from "react";

export default function Results({ nearestCamps }) {
  return (
    <div>
      <h1 class="mb-5">
       Closest camps are
      </h1>
      <div class="list-group">
      {nearestCamps[0].map((camp) => (
          <div 
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h3 class="mb-1">{camp["camp"]["address"]}</h3>
            <small>{camp["distInWords"]}</small>
          </div>
          <p class="mb-1">
            Contact Number: {camp["camp"]["number"]} <br/>
            Start Time: {camp["camp"]["startTime"]}<br/>
            End Time: {camp["camp"]["endTime"]}<br/>
          </p>
          {/* <small>Donec id elit non mi porta.</small> */}
        </div>
        ))}
                
      </div>
    </div>
  );
}
