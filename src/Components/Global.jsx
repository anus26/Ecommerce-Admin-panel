import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Global = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[24.8607, 67.0011]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[24.8607, 67.0011]}>
          <Popup>Karachi, Pakistan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Global;
