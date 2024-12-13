"use client";

import { RoleUtilisateur, Utilisateur } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  FaCapsules,
  FaEdit,
  FaEye,
  FaHeartbeat,
  FaTrash,
  FaUser,
  FaUsers,
  FaUserShield,
  FaUserTag,
} from "react-icons/fa";

export const userColumns: ColumnDef<Utilisateur>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
    cell: ({ row }) => <p className="text-14-medium">{row.original.nom}</p>,
  },
  {
    accessorKey: "prenom",
    header: "Prénom",
    cell: ({ row }) => <p className="text-14-medium">{row.original.prenom}</p>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <p className="text-14-medium">{row.original.email}</p>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;

      const getRoleIcon = (role: RoleUtilisateur) => {
        switch (role) {
          case RoleUtilisateur.Admin:
            return (
              <FaUserShield
                className="text-blue-500 mr-2"
                title="Admin"
                size={18}
              />
            );
          case RoleUtilisateur.Patient:
            return (
              <FaHeartbeat
                className="text-red-500 mr-2"
                title="Patient"
                size={18}
              />
            );
          case RoleUtilisateur.Pharmacist:
            return (
              <FaCapsules
                className="text-green-500 mr-2"
                title="Pharmacist"
                size={18}
              />
            );
          default:
            return (
              <FaUserTag
                className="text-gray-500 mr-2"
                title="Autre rôle"
                size={18}
              />
            );
        }
      };

      return (
        <div className="flex items-center">
          {getRoleIcon(role)}
          <span>{role}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: () => {
      return (
        <div className="flex gap-5 justify-center">
          <FaEdit className="text-blue-500 cursor-pointer" title="Modifier" />
          <FaEye className="text-gray-500 cursor-pointer" title="Inspecter" />
          <FaTrash className="text-red-500 cursor-pointer" title="Supprimer" />
        </div>
      );
    },
  },
];
