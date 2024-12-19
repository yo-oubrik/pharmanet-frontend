"use client";
import { RoleUtilisateur } from "@/types/types";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const currentUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!currentUser || currentUser.role !== RoleUtilisateur.Pharmacist) {
      router.push("/");
    }
  }

  return <div>{children}</div>;
};

export default Layout;
