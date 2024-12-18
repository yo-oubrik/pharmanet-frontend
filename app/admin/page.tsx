import { getPatientCount } from "../repo/utilisateurs";
import AdminPageClient from "./AdminPageClient";

const AdminPage = async () => {
  const patientsCount = await getPatientCount();
  const pharmacistsCount = 0;
  const pharmaciesCount = 0;
  return (
    <AdminPageClient
      patientsCount={patientsCount}
      pharmaciesCount={pharmaciesCount}
      pharmacistsCount={pharmacistsCount}
    />
  );
};

export default AdminPage;
