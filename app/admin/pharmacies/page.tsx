import { DataTable } from "@/components/table/DataTable";
import { pharmacies } from "@/utils/temp/api/pharmacies/pharmacies";
import Image from "next/image";
import Link from "next/link";
import { pharmaciesColumns } from "./pharmaciesColumns";
const AdminPharmacies = async () => {
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
        </section>
        <DataTable
          columns={pharmaciesColumns}
          data={[...Array(10)].flatMap(() => pharmacies)}
        />
      </main>
    </div>
  );
};
export default AdminPharmacies;
