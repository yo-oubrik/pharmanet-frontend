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
    nom: "Pharmacie Haut Founty",
    adresse: "Lot 335, Agadir",
    status: PharmacieStatus.Inactive,
    latitude: 30.40970119802564,
    longitude: -9.583816537162797,
  },
  {
    id: 3,
    nom: "Pharmacie itry",
    adresse: "Agadir 80000",
    status: PharmacieStatus.Active,
    latitude: 30.40984924348444,
    longitude: -9.576778420807095,
  },
];
export const getAllPharmacies = async () => {
  return pharmacies;
};
export const getPharmacieById = async (id: number) => {
  return pharmacies.find((pharmacie) => pharmacie.id === id);
};
export const createPharmacie = async (pharmacie: Pharmacie) => {
  pharmacies.push(pharmacie);
};
export const updatePharmacie = async (pharmacie: Pharmacie) => {
  const index = pharmacies.findIndex((p) => p.id === pharmacie.id);
  pharmacies[index] = pharmacie;
};
export const deletePharmacie = async (id: number) => {
  const index = pharmacies.findIndex((p) => p.id === id);
  pharmacies.splice(index, 1);
};
export const activatePharmacie = async (id: number) => {
  const pharmacie = await getPharmacieById(id);
  if (!pharmacie) return;
  pharmacie.status = PharmacieStatus.Active;
};
export const deactivatePharmacie = async (id: number) => {
  const pharmacie = await getPharmacieById(id);
  if (!pharmacie) return;
  pharmacie.status = PharmacieStatus.Inactive;
};
export const togglePharmacieStatus = async (id: number) => {
  const pharmacie = pharmacies.find((p) => p.id === id);
  pharmacie?.status === PharmacieStatus.Active
    ? await deactivatePharmacie(id)
    : await activatePharmacie(id);
};
