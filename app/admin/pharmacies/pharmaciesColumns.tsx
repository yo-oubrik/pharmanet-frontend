"use client";

import { Pharmacie, PharmacieStatus } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaEye,
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
    accessorKey: "latitude",
    header: "Latitude",
    cell: ({ row }) => (
      <p className="text-14-regular">{row.original.latitude.toFixed(4)}</p>
    ),
  },
  {
    accessorKey: "longitude",
    header: "Longitude",
    cell: ({ row }) => (
      <p className="text-14-regular">{row.original.longitude.toFixed(4)}</p>
    ),
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
