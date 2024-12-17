import { OrdonnanceWithUser } from "@/types/types";
export const ordonnances: OrdonnanceWithUser[] = [
  {
    id: 1,
    dateEnvoi: new Date("2021-09-01"),
    imageUrl: "https://picsum.photos/200",
    status: "Pending",
    utilisateur: {
      id: 1,
      nom: "Doe",
      prenom: "John",
      email: "x@x.x",
      motDePasse: "123",
      role: "patient",
    },
  },
  {
    id: 2,
    dateEnvoi: new Date("2021-09-02"),
    imageUrl: "https://picsum.photos/200",
    status: "Processing",
    utilisateur: {
      id: 2,
      nom: "Doe",
      prenom: "Jane",
      email: "y@y.y",
      motDePasse: "123",
      role: "patient",
    },
  },
  {
    id: 3,
    dateEnvoi: new Date("2021-09-03"),
    imageUrl: "https://picsum.photos/200",
    status: "Completed",
    utilisateur: {
      id: 3,
      nom: "Smith",
      prenom: "Alice",
      email: "z@z.z",
      motDePasse: "123",
      role: "patient",
    },
  },
  {
    id: 4,
    dateEnvoi: new Date("2021-09-04"),
    imageUrl: "https://picsum.photos/200",
    status: "Rejected",
    utilisateur: {
      id: 4,
      nom: "Smith",
      prenom: "Bob",
      email: "w@w.w",
      motDePasse: "123",
      role: "patient",
    },
  },
];
