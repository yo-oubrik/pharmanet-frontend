import { RoleUtilisateur } from "@/types/types";
import { promises as fs } from "fs";
import * as path from "path";

const utilisateursPath = path.join(
  process.cwd(),
  "app",
  "data",
  "utilisateurs.json"
);

async function readData() {
  try {
    const data = await fs.readFile(utilisateursPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
}

async function saveData(utilisateurs: any) {
  try {
    await fs.writeFile(
      utilisateursPath,
      JSON.stringify(utilisateurs, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error saving file:", error);
  }
}

export async function getAllUsers() {
  return await readData();
}

export async function addUser(newUser: any) {
  const utilisateurs = await readData();
  const newId = utilisateurs.length
    ? utilisateurs[utilisateurs.length - 1].id + 1
    : 1;
  const user = { id: newId, ...newUser };
  utilisateurs.push(user);
  await saveData(utilisateurs);
  return user;
}

export async function updateUser(updatedUser: any) {
  const utilisateurs = await readData();
  const index = utilisateurs.findIndex(
    (user: any) => user.id === updatedUser.id
  );
  if (index === -1) {
    throw new Error("User not found");
  }
  utilisateurs[index] = { ...utilisateurs[index], ...updatedUser };
  await saveData(utilisateurs);
  return utilisateurs[index];
}

export async function deleteUser(userId: number) {
  const utilisateurs = await readData();
  const updatedUsers = utilisateurs.filter((user: any) => user.id !== userId);
  if (updatedUsers.length === utilisateurs.length) {
    throw new Error("User not found");
  }
  await saveData(updatedUsers);
  return { success: true };
}
export async function getPatientCount() {
  const utilisateurs = await readData();
  return utilisateurs.filter(
    (user: any) => user.role === RoleUtilisateur.Patient
  ).length;
}
