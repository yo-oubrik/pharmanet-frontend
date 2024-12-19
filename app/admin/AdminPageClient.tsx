"use client";
import Image from "next/image";

import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
interface AdminPageClientProps {
  patientsCount: number;
  pharmacistsCount: number;
  pharmaciesCount: number;
}
const AdminPageClient: React.FC<AdminPageClientProps> = ({
  patientsCount,
  pharmaciesCount,
  pharmacistsCount,
}) => {
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
      </header>

      <main className="manager-main">
        <section className="w-full space-y-4">
          <h1 className="header">Tableau de bord</h1>
        </section>

        <section className="manager-stat">
          <StatCard
            count={patientsCount}
            label="Total patients"
            icon={"/assets/icons/patient.png"}
          />
          <StatCard
            count={pharmacistsCount}
            label="Total pharmaciens"
            icon={"/assets/icons/pharmacist.png"}
          />
          <StatCard
            count={pharmaciesCount}
            label="Total pharmacies"
            icon={"/assets/icons/pharmacy.png"}
          />
        </section>
        <section className="manager-buttons flex gap-4">
          <Button
            variant="outline"
            className="shad-primary-btn hover:opacity-85 transition"
            asChild
          >
            <Link href={"/admin/users"}> Gérer les utilisateurs</Link>
          </Button>
          <Button
            variant="outline"
            className="shad-primary-btn hover:opacity-85 transition"
            asChild
          >
            <Link href={"/admin/pharmacies"}> Gérer les les pharmacies</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default AdminPageClient;
