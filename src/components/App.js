import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import {calculate} from '../calculation/calcDistance';

export default function App() {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null }); 

  function enterCoordinates(val) {
    setCoordinates(val);
  }

  useEffect(()=>{
    console.log(coordinates);
    if(coordinates['lat'] && coordinates['lng']){
      // console.log(coordinates['lat']);
      // console.log(coordinates['lng']);
      calculate(coordinates)
    }

   },[coordinates])

  return (
    <div>
      <header class="masthead">
        <div class="container position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-6 text-center text-white">
              <Landing setCoordinates={enterCoordinates} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
