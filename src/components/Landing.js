import React from "react";
import Input from "./Autocomplete";
import Map from "./Map";

export default function Landing({ setCoordinates }) {
  return (
    <div>
      <h1 class="mb-5">
        Welcome to Mahadaan!
      </h1>
      <Map />

      <h1 class="mb-5" style={{marginTop:"48px"}}>
        Enter your address to fetch nearby blood donation centres.
      </h1>
      <form
        class="form-subscribe text-black"
        id="contactForm"
        data-sb-form-api-token="API_TOKEN"
      >
        <Input setCoordinates={setCoordinates} />
      </form>
    </div>
  );
}
