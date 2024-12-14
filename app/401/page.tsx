"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-7xl font-bold">401</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-100">
        Accés non autorisé
      </h2>
      <p className="mt-2 text-lg  text-gray-400 max-w-lg">
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page
      </p>
      <Button
        className="shad-primary-btn mt-6"
        variant={"default"}
        onClick={() => router.push("/")}
      >
        Retour à l'accueil
      </Button>
    </div>
  );
}
