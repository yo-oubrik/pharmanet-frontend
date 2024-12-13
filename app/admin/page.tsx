import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";

const AdminPage = async () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
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

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Tableau de bord</h1>
        </section>

        <section className="admin-stat">
          <StatCard
            type="utilisateurs"
            count={0}
            label="Total patients"
            icon={"/assets/icons/patient.png"}
          />
          <StatCard
            type="utilisateurs"
            count={0}
            label="Total pharmaciens"
            icon={"/assets/icons/pharmacist.png"}
          />
          <StatCard
            type="pharmacies"
            count={0}
            label="Total pharmacies"
            icon={"/assets/icons/pharmacy.png"}
          />
        </section>
        <section className="admin-buttons flex gap-4">
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

export default AdminPage;
