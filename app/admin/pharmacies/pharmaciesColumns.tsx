"use client";

import { deletePharmacie } from "@/app/api/pharmacies/pharmacies";
import { Pharmacie, PharmacieStatus } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import {
  FaCheckCircle,
  FaEdit,
  FaLocationArrow,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";

export const pharmaciesColumns: ColumnDef<Pharmacie>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
    cell: ({ row }) => <p className="text-14-medium">{row.original.nom}</p>,
  },
  {
    accessorKey: "adresse",
    header: "Adresse",
    cell: ({ row }) => <p className="text-14-medium">{row.original.adresse}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className="flex items-center">
          {status === PharmacieStatus.Active ? (
            <FaCheckCircle className="text-green-500 mr-2" />
          ) : (
            <FaTimesCircle className="text-red-500 mr-2" />
          )}
          <span>{status}</span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const router = useRouter();
      const id = row.original.id;
      return (
        <div className="flex gap-7">
          <FaEdit className="text-blue-500 cursor-pointer" title="Modifier" />
          <FaLocationArrow
            className="text-gray-500 cursor-pointer"
            title="Localiser"
            onClick={() => {
              router.push(`/admin/pharmacies/${id}`);
            }}
          />
          <FaTrash
            className="text-red-500 cursor-pointer"
            title="Supprimer"
            onClick={async () => {
              await deletePharmacie(id);
            }}
          />
        </div>
      );
    },
  },
];
