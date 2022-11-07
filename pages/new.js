import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVg4h2Gp1ohkZxKqfh-T4KJGNRfsDKh0U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker text="Think India" />
      </GoogleMapReact>
    </div>
  );
}
