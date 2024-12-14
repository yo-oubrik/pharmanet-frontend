import { RoleUtilisateur } from "@/types/types";
import { getCurrentUser } from "../api/utilisateurs/utilisateurs";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const currentUser = await getCurrentUser();

  if (currentUser.role !== RoleUtilisateur.Admin) {
    redirect("/401");
  }

  return <div>{children}</div>;
};

export default Layout;
