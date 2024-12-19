import { getPharmaciesCount } from "../repo/pharmacies";
import { getPatientCount, getPharmacistCount } from "../repo/utilisateurs";
import AdminPageClient from "./AdminPageClient";

const AdminPage = async () => {
  const patientsCount = await getPatientCount();
  const pharmacistsCount = await getPharmacistCount();
  const pharmaciesCount = await getPharmaciesCount();
  return (
    <AdminPageClient
      patientsCount={patientsCount}
      pharmaciesCount={pharmaciesCount}
      pharmacistsCount={pharmacistsCount}
    />
  );
};

export default AdminPage;
