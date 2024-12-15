export enum PharmacieStatus {
  Active = "Active",
  Inactive = "Inactive",
}
export type Pharmacie = {
  id: number;
  nom: string;
  adresse: string;
  status: PharmacieStatus;
  latitude: number;
  longitude: number;
  responsable: string;
};
export type Utilisateur = {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  role: RoleUtilisateur;
};

export enum RoleUtilisateur {
  Pharmacist = "pharmacist",
  Patient = "patient",
  Admin = "admin",
}
