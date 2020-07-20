import React from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100px",
  height: "100px",
}
const center = {
  lat: 43,
  lng: -79
}

export default function Map_Sad() {
  //return (<h2>"hello world"</h2>);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      >
    <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </div >
  );
}