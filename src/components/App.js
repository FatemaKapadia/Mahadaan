import React, { useState, useEffect, useCallback } from "react";
import Landing from "./Landing";
import { calculate } from "../calculation/calcDistance";
import Results from "./Results";

export default function App() {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [page, setPage] = useState("landing");
  const [nearestCamps, setNearestCamps] = useState([]);

  function enterCoordinates(val) {
    setCoordinates(val);
  }

  const getNearest = useCallback(async (coordinates) => {
    const tmp = await calculate(coordinates);
    console.log(nearestCamps);
    setNearestCamps((nearestCamps) => [...nearestCamps, tmp]);
    setPage("results");
  }, []);

  useEffect(() => {
    console.log(coordinates);
    if (coordinates["lat"] && coordinates["lng"]) {
      getNearest(coordinates);
      setPage("loading");
    }
  }, [coordinates, getNearest]);

  return (
    <div>
      <header class="masthead" style={{height:"100%"}}>
        <div
          class="container position-relative"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <div class="row justify-content-center">
            <div class="text-center text-white">
              {page === "landing" ? (
                <Landing setCoordinates={enterCoordinates} />
              ) : null}
              {page === "loading" ? (
                <div style={{padding:"25% 0"}} height="100%">Fetching results...</div>
              ) : null}
              {page === "results" ? (
                <Results nearestCamps={nearestCamps} setPage={setPage}/>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
