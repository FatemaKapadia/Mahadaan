import React from "react";
import GoogleMapReact from "google-map-react";
import { camps } from "../calculation/camps";

export default function Map() {
  const renderMarkers = (map, maps) => {
    let marker = camps.map((data) => {
      const marker = new maps.Marker({
        position: { lat: data["lat"], lng: data["lng"] },
        map,
        title: data["address"],
        icon: {},
      });
      return marker;
    });
    return marker;
  };

  return (
    <div
      class="m-sm-1"
      style={{
        width: "100%",
        height: "100vh",
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={{ lat: 18.52043, lng: 73.856744 }}
          defaultZoom={11}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        ></GoogleMapReact>
    </div>
  );
}
