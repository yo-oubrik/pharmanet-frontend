import { updateOrdonnance } from "@/app/repo/ordonnances";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    await updateOrdonnance(data.id, data.status, data.montant);
    return NextResponse.json(
      { message: "Le status de l'ordonnance à été bien modifié" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de la modefication de status de l'ordonnance" },
      { status: 500 }
    );
  }
}
