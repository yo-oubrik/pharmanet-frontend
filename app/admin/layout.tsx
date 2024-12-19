"use client";
import { RoleUtilisateur } from "@/types/types";
import { redirect, useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const currentUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!currentUser || currentUser.role !== RoleUtilisateur.Admin) {
      router.push("/");
    }
  }

  return <div>{children}</div>;
};

export default Layout;
