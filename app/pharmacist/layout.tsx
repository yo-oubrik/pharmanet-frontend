"use client";
import { RoleUtilisateur } from "@/types/types";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../api/utilisateurs/utilisateurs";

const Layout = async ({ children }) => {
  const currentUser = await getCurrentUser();
  if (currentUser.role !== RoleUtilisateur.Pharmacist) {
    redirect("/401");
  }

  return <div>{children}</div>;
};

export default Layout;
