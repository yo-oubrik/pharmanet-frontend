import {
  addPharmacie,
  deletePharmacie,
  updatePharmacie,
} from "@/app/repo/pharmacies";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await addPharmacie(data);
    return NextResponse.json({ message: "Pharmacie ajoutée" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'ajout de la pharmacie" },
      { status: 500 }
    );
  }
}
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    await updatePharmacie(data);
    return NextResponse.json(
      { message: "Pharmacie mise à jour" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de la mise à jour de la pharmacie" },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {
  try {
    const data = await request.json();
    await deletePharmacie(data);
    return NextResponse.json(
      { message: "Pharmacie supprimée" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de la suppression de la pharmacie" },
      { status: 500 }
    );
  }
}
