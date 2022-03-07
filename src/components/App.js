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
      <header class="masthead">
        <div class="container position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-6 text-center text-white">
              {page === "landing" ? (
                <Landing setCoordinates={enterCoordinates} />
              ) : null}
              {page === "loading" ? <div height="100%">fetching results...</div> : null}
              {page === "results" ? (
                <Results nearestCamps={nearestCamps} />
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
