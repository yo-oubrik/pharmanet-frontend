import { RoleUtilisateur, Utilisateur } from "@/types/types";

export const utilisateurs: Utilisateur[] = [
  {
    nom: "admin",
    prenom: "admin",
    email: "admin@admin.com",
    role: RoleUtilisateur.Admin,
    motDePasse: "admin",
  },
  {
    nom: "Utilisateur 1",
    prenom: "Prenom 1",
    email: "xyz@xyz.com",
    role: RoleUtilisateur.Patient,
    motDePasse: "utilisateur1",
  },
  {
    nom: "Utilisateur 2",
    prenom: "Prenom 2",
    email: "xyz@xyz.com",
    role: RoleUtilisateur.Pharmacist,
    motDePasse: "utilisateur2",
  },
  {
    nom: "Utilisateur 3",
    prenom: "Prenom 3",
    email: "abc@abc.com",
    role: RoleUtilisateur.Patient,
    motDePasse: "utilisateur3",
  },
];
