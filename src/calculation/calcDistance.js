import { camps } from "./camps.js";
import { google } from 'google-maps';

const URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
const ORIGINS = "?origins=";
const DESTINATIONS = "?destinations=";
const KEY = "&key=";

export function calculate(coordinates) {
  const service = new google.maps.DistanceMatrixService();
  const origin1 = { lat: 55.93, lng: -3.118 };
  const destinationA = { lat: 50.087, lng: 14.421 };
  const request = {
    origins: [origin1],
    destinations: [destinationA],
  };

  service.getDistanceMatrix(request).then((response) => {
    // put response
    console.log(JSON.stringify(response, null, 2));
  });
}
//     const originCoordinates = coordinates['lat'] + '%2C' + coordinates['lng'];
//     const destinationCoordinates = '0.0' + '%2C' + '0.0';
//   var axios = require("axios");

//   var config = {
//     method: "get",
//     url: URL + ORIGINS + originCoordinates + DESTINATIONS + destinationCoordinates+KEY + process.env.REACT_APP_API_KEY,
//     headers: {},
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
