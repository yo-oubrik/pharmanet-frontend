"use client";
import { RoleUtilisateur } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!currentUser || currentUser.role !== RoleUtilisateur.Admin) {
      router.push("/");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return <div>{children}</div>;
};

export default Layout;
