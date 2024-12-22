"use client";
import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import router from "next/router";

interface PharmacistClientPageProps {
  stats: {
    pendingOrdersCount: number;
    processingOrdersCount: number;
    completedOrdersCount: number;
    rejectedOrdersCount: number;
  };
}

const PharmacistClientPage = ({ stats }: PharmacistClientPageProps) => {
  const {
    pendingOrdersCount,
    processingOrdersCount,
    completedOrdersCount,
    rejectedOrdersCount,
  } = stats;
  const router = useRouter();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="manager-header justify-between">
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/icons/logo.png"
              height={70}
              width={70}
              alt="logo"
            />
            <h2 className="font-bold">PharmaNet</h2>
          </div>
        </Link>
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/");
          }}
        >
          déconnexion
        </Button>
      </header>

      <main className="manager-main">
        <section className="w-full space-y-4">
          <h1 className="header">Tableau de bord</h1>
        </section>

        <div className="manager-stat">
          <StatCard
            count={pendingOrdersCount}
            label="Ordonnances en attente"
            icon={"/assets/icons/pending.png"}
          />
          <StatCard
            count={processingOrdersCount}
            label="Ordonnances en cours de traitement"
            icon={"/assets/icons/processing.png"}
          />
        </div>
        <div className="manager-stat">
          <StatCard
            count={rejectedOrdersCount}
            label="Ordonnances rejetées"
            icon={"/assets/icons/rejected.png"}
          />
          <StatCard
            count={completedOrdersCount}
            label="Ordonnances complétées"
            icon={"/assets/icons/completed.png"}
          />
        </div>
        <section className="manager-buttons flex gap-4">
          <Button
            variant="outline"
            className="shad-primary-btn hover:opacity-85 transition"
            asChild
          >
            <Link href={"/pharmacist/ordonnances"}> Gérer les ordonnances</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default PharmacistClientPage;
