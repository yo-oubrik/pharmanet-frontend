// app/api/pharmacies/[id]/route.ts
import { getPharmacieById } from "@/app/repo/pharmacies";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return NextResponse.json(
        { message: "Missing pharmacy ID" },
        { status: 400 }
      );
    }

    const pharmacie = await getPharmacieById(parseInt(params.id));

    if (!pharmacie) {
      return NextResponse.json(
        { message: "Pharmacy not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(pharmacie, { status: 200 });
  } catch (error) {
    console.error("Error fetching pharmacy:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
