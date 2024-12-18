"use client";

import { Pharmacie } from "@/types/types";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Params {
  id: string;
}

const PharmacyMarkerIcon = new Icon({
  iconUrl: "/assets/icons/localisation.png",
  iconSize: [41, 41],
});

const PharmaciePage = ({ params }: { params: Params }) => {
  const [pharmacy, setPharmacy] = useState<Pharmacie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPharmacy = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/pharmacies/${params.id}`);

        if (!response.ok) {
          if (response.status === 404) {
            router.push("/not-found");
            return;
          }
          throw new Error(
            `Failed to fetch pharmacy data: ${response.statusText}`
          );
        }

        const data = await response.json();
        if (!data) {
          router.push("/not-found");
          return;
        }
        setPharmacy(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPharmacy();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center p-4">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!pharmacy) {
    return null;
  }

  return (
    <div className="h-screen max-h-screen">
      <MapContainer
        center={[pharmacy.latitude, pharmacy.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[pharmacy.latitude, pharmacy.longitude]}
          icon={PharmacyMarkerIcon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{pharmacy.nom}</h3>
              <p className="mt-1">{pharmacy.adresse}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PharmaciePage;
