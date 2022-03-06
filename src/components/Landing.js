import React from "react";
import Input from "./Autocomplete";

export default function Landing({ setCoordinates }) {
  return (
    <div>
      <h1 class="mb-5">
        Enter your address to fetch nearby blood donation centres!
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
