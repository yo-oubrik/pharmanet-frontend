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
export const getCurrentUser = async () => {
  return utilisateurs[0];
};
export const getUsersCount = async () => {
  return utilisateurs.length;
};
export const getPatientCount = async () => {
  return utilisateurs.filter(
    (utilisateur) => utilisateur.role === RoleUtilisateur.Patient
  ).length;
};
export const getPharmacistCount = async () => {
  return utilisateurs.filter(
    (utilisateur) => utilisateur.role === RoleUtilisateur.Pharmacist
  ).length;
};
export const addNewUser = async (utilisateur: Utilisateur) => {
  if (!((await getCurrentUser()).role === RoleUtilisateur.Admin)) return;
  utilisateurs.push(utilisateur);
  return utilisateur;
};
export const updateUser = async (utilisateur: Utilisateur) => {
  if (!((await getCurrentUser()).role === RoleUtilisateur.Admin)) return;
  const index = utilisateurs.findIndex(
    (user) => user.email === utilisateur.email
  );
  if (index === -1) return;
  utilisateurs[index] = utilisateur;
  return utilisateur;
};
export const getAllUsers = async () => utilisateurs;
export const deleteUser = async (id: number) => {
  if (!((await getCurrentUser()).role === RoleUtilisateur.Admin)) return;
  const index = utilisateurs.findIndex((user) => user.id === id);
  if (index === -1) return;
  utilisateurs.splice(index, 1);
  return id;
};
