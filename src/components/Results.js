import React from "react";

export default function Results({ nearestCamps, setPage }) {
  return (
    <div>
      {nearestCamps[0].length === 0 ? (
        <h1 style={{ padding: "25% 0" }}>No camps found!</h1>
      ) : (
        <div>
          <h1 class="mb-5">Camps closest to the entered address</h1>
          <div class="list-group">
            {nearestCamps[0].map((camp) => (
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h3 class="mb-1">{camp["camp"]["address"]}</h3>
                  <small>{camp["distInWords"]}</small>
                </div>
                <p class="mb-1">
                  Contact Number: {camp["camp"]["number"]} <br />
                  Date: {camp["camp"]["date"]} <br />
                  Start Time: {camp["camp"]["startTime"]}
                  <br />
                  End Time: {camp["camp"]["endTime"]}
                  <br />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ paddingTop: "3%", fontSize: "30px" }}>
        <button
          style={{ width: "100%", padding: "0.2rem", borderRadius: "5px" }}
          onClick={() => setPage("landing")}
        >
          Search another address
        </button>
      </div>
    </div>
  );
}
