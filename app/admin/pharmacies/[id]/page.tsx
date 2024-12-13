"use client";
import "leaflet/dist/leaflet.css";
import { Pharmacie } from "@/types/types";
import { pharmacies } from "@/app/api/pharmacies/pharmacies";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const PharmaciePage = ({ params }) => {
  const { id } = params;

  const pharmacie = pharmacies.find((ph: Pharmacie) => ph.id === parseInt(id));

  if (!pharmacie) {
    return <p>Pharmacie non trouvée</p>;
  }

  return (
    <div className="h-screen max-h-screen">
      <MapContainer
        center={[pharmacie.latitude, pharmacie.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
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
