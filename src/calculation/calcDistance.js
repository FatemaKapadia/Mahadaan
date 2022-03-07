import { camps } from "./camps.js";

export function calculate(coordinates) {
  const originCoordinates = coordinates["lat"] + "%2C" + coordinates["lng"];

  let distances = [];

  camps.forEach(calcDist);

  function calcDist(value, index, camps) {
    const destinationCoordinates = value["lat"] + "%2C" + value["lng"];
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://s9ypn1qxaj.execute-api.ap-south-1.amazonaws.com/testing/getDistance?origin=${originCoordinates}&destination=${destinationCoordinates}`,
    };

    axios(config)
      .then(function (response) {
        response = response.data;
        // console.log(response);
        if (response["rows"][0]["elements"][0]["distance"]) {
          const distance =
            response["rows"][0]["elements"][0]["distance"]["value"];
          const distInWords =
            response["rows"][0]["elements"][0]["distance"]["text"];
          let curr = {};
          curr["distance"] = distance;
          curr["index"] = index;
          curr["distInWords"] = distInWords;
          distances.push(curr);
        } else {
          console.log(value["address"] + " is giving an error");
        }

        function compare( a, b ) {
          if ( a.distance < b.distance ){
            return -1;
          }
          else if(a.distance > b.distance) {
            return 1;
          } else {
            return 0;
          }
        }
      
        distances.sort(compare);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
