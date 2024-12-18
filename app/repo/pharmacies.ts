import { Pharmacie } from "@/types/types";
import { promises as fs } from "fs";
import * as path from "path";

const pharmaciesPath = path.join(
  process.cwd(),
  "app",
  "data",
  "pharmacies.json"
);

async function readData() {
  try {
    const data = await fs.readFile(pharmaciesPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
}

async function saveData(pharmacies: Pharmacie[]) {
  try {
    await fs.writeFile(
      pharmaciesPath,
      JSON.stringify(pharmacies, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error saving file:", error);
  }
}
export async function getPharmacies() {
  return readData();
}
export async function addPharmacie(pharmacie: Pharmacie) {
  const pharmacies = await readData();
  const newId = pharmacies.length
    ? pharmacies[pharmacies.length - 1].id + 1
    : 1;
  const newPharmacie = { id: newId, ...pharmacie };
  pharmacies.push(newPharmacie);
  await saveData(pharmacies);
}
export async function updatePharmacie(updatedPharmacie: Pharmacie) {
  const pharmacies = await readData();
  const index = pharmacies.findIndex(
    (pharmacie: Pharmacie) => pharmacie.id === updatedPharmacie.id
  );
  pharmacies[index] = updatedPharmacie;
  await saveData(pharmacies);
}
export async function deletePharmacie(pharmacieId: number) {
  const pharmacies = await readData();
  const updatedPharmacies = pharmacies.filter(
    (pharmacie: Pharmacie) => pharmacie.id !== pharmacieId
  );
  await saveData(updatedPharmacies);
}
export async function getPharmacieById(pharmacieId: number) {
  const pharmacies = await readData();
  return pharmacies.find(
    (pharmacie: Pharmacie) => pharmacie.id === pharmacieId
  );
}
