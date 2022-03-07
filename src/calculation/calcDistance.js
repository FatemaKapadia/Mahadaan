import { camps } from "./camps.js";

export async function calculate(coordinates) {
  const originCoordinates = coordinates["lat"] + "%2C" + coordinates["lng"];

  let distances = [];

  for (const ind in camps) {
    const value = camps[ind]
    const destinationCoordinates = value["lat"] + "%2C" + value["lng"];
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://s9ypn1qxaj.execute-api.ap-south-1.amazonaws.com/testing/getDistance?origin=${originCoordinates}&destination=${destinationCoordinates}`,
    };

    await axios(config)
      .then(function (response) {
        response = response.data;
        if (response["rows"][0]["elements"][0]["distance"]) {
          const distance =
            response["rows"][0]["elements"][0]["distance"]["value"];
          const distInWords =
            response["rows"][0]["elements"][0]["distance"]["text"];
          let curr = {};
          curr["distance"] = distance;
          curr["camp"] = value;
          curr["distInWords"] = distInWords;
          distances.push(curr);
        } else {
          console.log(value["address"] + " is giving an error");
        } 
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
  distances.sort((a, b)=>{
    if(a.distance>b.distance)
      return 1;
    else if(a.distance<b.distance)
      return -1;
    return 0;
  })

  console.log(distances);
  return distances.slice(0, 5);
}
