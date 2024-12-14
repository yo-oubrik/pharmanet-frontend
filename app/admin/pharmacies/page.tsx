import { DataTable } from "@/components/table/DataTable";
import { getAllPharmacies } from "@/app/api/pharmacies/pharmacies";
import Image from "next/image";
import Link from "next/link";
import { pharmaciesColumns } from "./pharmaciesColumns";
import { Button } from "@/components/ui/button";
const AdminPharmacies = async () => {
  const pharmacies = await getAllPharmacies();
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
          <h1 className="header">Gestion de pharmacies</h1>
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={"/admin/pharmacies/add"}>Ajouter Pharmacie</Link>
          </Button>
          <DataTable columns={pharmaciesColumns} data={pharmacies} />
        </section>
      </main>
    </div>
  );
};
export default AdminPharmacies;
