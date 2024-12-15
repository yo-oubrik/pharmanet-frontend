"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-100">
        Page non trouvée
      </h2>
      <p className="mt-2 text-lg  text-gray-400 max-w-lg">
        La page que vous cherchez n'existe pas ou a été déplacée.
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
