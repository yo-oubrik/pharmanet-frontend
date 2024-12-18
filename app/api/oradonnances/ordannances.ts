import {
  OrdonnanceStatus,
  OrdonnanceWithUser,
  RoleUtilisateur,
} from "@/types/types";
export const ordonnances: OrdonnanceWithUser[] = [
  {
    id: 1,
    dateEnvoi: new Date("2024-09-01"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Completed,
    utilisateur: {
      id: 1,
      nom: "Doe",
      prenom: "John",
      email: "x@x.x",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 2,
    dateEnvoi: new Date("2024-09-02"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Pending,
    utilisateur: {
      id: 2,
      nom: "Doe",
      prenom: "Jane",
      email: "y@y.y",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 3,
    dateEnvoi: new Date("2024-09-03"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Rejected,
    utilisateur: {
      id: 3,
      nom: "Doe",
      prenom: "Jack",
      email: "z@z.z",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 4,
    dateEnvoi: new Date("2024-09-04"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Processing,
    utilisateur: {
      id: 4,
      nom: "Doe",
      prenom: "Jill",
      email: "a@a.a",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 5,
    dateEnvoi: new Date("2024-09-05"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Completed,
    utilisateur: {
      id: 5,
      nom: "Doe",
      prenom: "James",
      email: "b@b.b",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 6,
    dateEnvoi: new Date("2024-09-06"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Pending,
    utilisateur: {
      id: 6,
      nom: "Doe",
      prenom: "Jenny",
      email: "c@c.c",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 7,
    dateEnvoi: new Date("2024-09-07"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Rejected,
    utilisateur: {
      id: 7,
      nom: "Doe",
      prenom: "Jared",
      email: "d@d.d",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 8,
    dateEnvoi: new Date("2024-09-08"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Processing,
    utilisateur: {
      id: 8,
      nom: "Doe",
      prenom: "Jasmine",
      email: "e@e.e",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 9,
    dateEnvoi: new Date("2024-09-09"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Completed,
    utilisateur: {
      id: 9,
      nom: "Doe",
      prenom: "Jared",
      email: "f@f.f",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
  {
    id: 10,
    dateEnvoi: new Date("2024-09-10"),
    imageUrl: "https://picsum.photos/200",
    status: OrdonnanceStatus.Pending,
    utilisateur: {
      id: 10,
      nom: "Doe",
      prenom: "Jasmine",
      email: "g@g.g",
      motDePasse: "123",
      role: RoleUtilisateur.Patient,
    },
  },
];
export const getOrdonnancesCount = async (status: OrdonnanceStatus) =>
  ordonnances.filter((ord) => ord.status === status).length;
export const getPendingOrdonnancesCount = async () =>
  getOrdonnancesCount(OrdonnanceStatus.Pending);
export const getCompletedOrdonnancesCount = async () =>
  getOrdonnancesCount(OrdonnanceStatus.Completed);
export const getRejectedOrdonnancesCount = async () =>
  getOrdonnancesCount(OrdonnanceStatus.Rejected);
export const getProcessingOrdonnancesCount = async () =>
  getOrdonnancesCount(OrdonnanceStatus.Processing);
export const getAllOrdonnances = async () => ordonnances;
