"use client";
import "leaflet/dist/leaflet.css";
import { Pharmacie } from "@/types/types";
import { pharmacies } from "@/utils/temp/api/pharmacies/pharmacies";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const PharmaciePage = ({ params }) => {
  const { id } = params;

  const pharmacie = pharmacies.find((ph: Pharmacie) => ph.id === parseInt(id));

  if (!pharmacie) {
    return <p>Pharmacie non trouvée</p>;
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1>{pharmacie.nom}</h1>
        <p>Adresse : {pharmacie.adresse}</p>
        <p>Status : {pharmacie.status}</p>
        <p>Latitude : {pharmacie.latitude.toFixed(4)}</p>
        <p>Longitude : {pharmacie.longitude.toFixed(4)}</p>
      </div>
      <MapContainer
        center={[pharmacie.latitude, pharmacie.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[pharmacie.latitude, pharmacie.longitude]}>
          <Popup>
            {pharmacie.nom} <br /> {pharmacie.adresse}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PharmaciePage;
