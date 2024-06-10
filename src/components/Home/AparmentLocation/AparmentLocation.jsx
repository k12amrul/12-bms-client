import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AparmentLocation = () => {
  const position = [51.505, -0.09];

  return (
<div>
      
<div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold my-10"> Our  Location </h1>
          </div>
          
          </div>



    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
</div>

  );
}

export default AparmentLocation;
