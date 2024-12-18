"use client";

import { Button } from "@/components/ui/button";
import { PharmacieError } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const isPharmacieError = error instanceof PharmacieError;
  const errorTitle = isPharmacieError ? "Erreur" : "Erreur inattendue";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-7xl font-bold">{errorTitle}</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-100">
        {error.message}
      </h2>
      <p className="mt-2 text-lg text-gray-400 max-w-lg">
        {isPharmacieError
          ? "Veuillez réessayer ou retourner à l'accueil."
          : "Une erreur inattendue s'est produite. Veuillez réessayer plus tard."}
      </p>
      <div className="flex gap-4 mt-6">
        <Button
          className="shad-primary-btn"
          variant="default"
          onClick={() => reset()}
        >
          Réessayer
        </Button>
        <Button
          className="shad-primary-btn"
          variant="outline"
          onClick={() => router.push("/")}
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
}
