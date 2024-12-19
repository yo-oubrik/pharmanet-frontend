export enum PharmacieStatus {
  Active = "Active",
  Inactive = "Inactive",
}
export type Pharmacie = {
  id?: number;
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
export type Ordonnance = {
  id?: number;
  dateEnvoi: Date;
  imageUrl: string;
  montant?: number;
  status: OrdonnanceStatus;
};
export type OrdonnanceForTable = {
  id?: number;
  dateEnvoi: string;
  heureEnvoi: string;
  imageUrl: string;
  montant?: number;
  status: OrdonnanceStatus;
};
export enum OrdonnanceStatus {
  Pending = "Pending",
  Processing = "Processing",
  Completed = "Completed",
  Rejected = "Rejected",
}
export type OrdonnanceWithUser = Ordonnance & {
  utilisateur: Utilisateur;
};
export class PharmacieError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PharmacieError";
  }
}
export type Credentials = {
  email: string;
  motDePasse: string;
};
