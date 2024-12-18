import { getAllOrdonnances } from "@/app/api/oradonnances/ordannances";
import { AddUserDialog } from "@/components/ui/users/AddUserDialog";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "./DataTable";
import { ordonnancesColumns } from "./ordonnancesColumns";
const PharmacistOrdonnances = async () => {
  const ordonnances = await getAllOrdonnances();
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
          <h1 className="header">Gestion des ordonances</h1>
          <DataTable columns={ordonnancesColumns} data={ordonnances} />
        </section>
      </main>
    </div>
  );
};
export default PharmacistOrdonnances;
