import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function Autocomplete({ setCoordinates }) {
  const [address, setAddress] = useState("");

  async function handleSelect(value) {
    let results = await geocodeByAddress(value);
    let latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{padding:"0 3%"}}>
          <input
            {...getInputProps({ placeholder: "Type address" })}
            style={{
              font: "18px",
              padding: "0 0.5em",
              fontSize: "20px",
              lineHeight: "3",
              width:"100%",
              borderRadius: "15px"
            }}
          />

          <div style={{paddingTop:"3%", fontSize: "20px", 
                borderRadius: "15px"}}>
            {loading ? <div>...loading</div> : null}

            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                padding: "0 0.5em",
                lineHeight: "2"
              };

              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
