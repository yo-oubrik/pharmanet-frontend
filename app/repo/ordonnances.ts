import { OrdonnanceStatus, OrdonnanceWithUser } from "@/types/types";
import { time } from "console";
import dayjs from "dayjs";
import { promises as fs } from "fs";
import * as path from "path";

const ordonnancesPath = path.join(
  process.cwd(),
  "app",
  "data",
  "ordonnances.json"
);

async function readData() {
  try {
    const data = await fs.readFile(ordonnancesPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
}

async function saveData(ordonnances: OrdonnanceWithUser[]) {
  try {
    await fs.writeFile(
      ordonnancesPath,
      JSON.stringify(ordonnances, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error saving file:", error);
  }
}

export async function getOrdonnances() {
  return readData();
}

export async function addOrdonnance(ordonnance: OrdonnanceWithUser) {
  const ordonnances = await readData();
  const newId = ordonnances.length
    ? ordonnances[ordonnances.length - 1].id + 1
    : 1;
  const newOrdonnance = { id: newId, ...ordonnance };
  ordonnances.push(newOrdonnance);
  await saveData(ordonnances);
}

export async function updateOrdonnance(
  id: number,
  status: OrdonnanceStatus,
  montant?: number
) {
  const ordonnances = await readData();
  const ordonnanceIndex = ordonnances.findIndex(
    (ordonnance: OrdonnanceWithUser) => ordonnance.id === id
  );
  if (ordonnanceIndex == -1) {
    throw new Error("Ordonnance non trouvée");
  }
  ordonnances[ordonnanceIndex].status = status;
  if (status === OrdonnanceStatus.Completed) {
    ordonnances[ordonnanceIndex].montant = montant;
  }
  await saveData(ordonnances);
}

export async function deleteOrdonnance(ordonnanceId: number) {
  const ordonnances = await readData();
  const updatedOrdonnances = ordonnances.filter(
    (ordonnance: OrdonnanceWithUser) => ordonnance.id !== ordonnanceId
  );
  await saveData(updatedOrdonnances);
}

export async function getOrdonnanceById(ordonnanceId: number) {
  const ordonnances = await readData();
  return ordonnances.find(
    (ordonnance: OrdonnanceWithUser) => ordonnance.id === ordonnanceId
  );
}
export async function getCompletedOrdonnancesCount() {
  const ordonnances = await readData();
  return ordonnances.filter(
    (ordonnance: OrdonnanceWithUser) =>
      ordonnance.status === OrdonnanceStatus.Completed
  ).length;
}
export async function getPendingOrdonnancesCount() {
  const ordonnances = await readData();
  return ordonnances.filter(
    (ordonnance: OrdonnanceWithUser) =>
      ordonnance.status === OrdonnanceStatus.Pending
  ).length;
}
export async function getProcessingOrdonnancesCount() {
  const ordonnances = await readData();
  return ordonnances.filter(
    (ordonnance: OrdonnanceWithUser) =>
      ordonnance.status === OrdonnanceStatus.Processing
  ).length;
}
export async function getRejectedOrdonnancesCount() {
  const ordonnances = await readData();
  return ordonnances.filter(
    (ordonnance: OrdonnanceWithUser) =>
      ordonnance.status === OrdonnanceStatus.Rejected
  ).length;
}
export async function getAllOrdonnances() {
  return readData();
}
export async function getOrdonnancesForTable() {
  const ordonnances = await readData();
  return ordonnances.map((ordonnance: OrdonnanceWithUser) => {
    const dateTime = dayjs(ordonnance.dateEnvoi);
    const time = dateTime.format("HH:mm:ss");
    const date = dateTime.format("YYYY-MM-DD");
    return {
      ...ordonnance,
      dateEnvoi: date,
      heureEnvoi: time,
    };
  });
}
