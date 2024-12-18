"use client";
import { Pharmacie } from "@/types/types";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
interface PharmaciePageClientProps {
  pharmacie: Pharmacie;
}
export const PharmaciePageClient: React.FC<PharmaciePageClientProps> = ({
  pharmacie,
}) => {
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
        <Marker
          position={[pharmacie.latitude, pharmacie.longitude]}
          icon={
            new Icon({
              iconUrl: "/assets/icons/localisation.png",
              iconSize: [41, 41],
            })
          }
        >
          <Popup>
            {pharmacie.nom} <br /> {pharmacie.adresse}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
