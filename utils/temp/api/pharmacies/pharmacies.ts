import { Pharmacie, PharmacieStatus } from "@/types/types";

export const pharmacies: Pharmacie[] = [
  {
    id: 1,
    nom: "Pharmacie Agadir Bay",
    adresse: "Magasin N° 23, Imm. 10, Agadir bay, Agadir 80000",
    status: PharmacieStatus.Active,
    latitude: 30.401086523592667,
    longitude: -9.584605089287122,
  },
  {
    id: 2,
    nom: "Pharmacie 2",
    adresse: "Adresse 2",
    status: PharmacieStatus.Inactive,
    latitude: 0,
    longitude: 0,
  },
  {
    id: 3,
    nom: "Pharmacie 3",
    adresse: "Adresse 3",
    status: PharmacieStatus.Active,
    latitude: 0,
    longitude: 0,
  },
  {
    id: 4,
    nom: "Pharmacie 4",
    adresse: "Adresse 4",
    status: PharmacieStatus.Inactive,
    latitude: 0,
    longitude: 0,
  },
];
