"use client";

import { Button } from "@/components/ui/button";
import { OrdonnanceStatusIcon } from "@/components/ui/ordonnances/OrdonnanceStatusIcon";
import { UpdateOrdonnanceDialog } from "@/components/ui/ordonnances/UpdateOrdonnanceDialog";
import { OrdonnanceForTable, OrdonnanceStatus } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowUpDown } from "lucide-react";
import { FaDownload } from "react-icons/fa";
dayjs.extend(relativeTime);

export const ordonnancesColumns: ColumnDef<OrdonnanceForTable>[] = [
  {
    accessorKey: "dateEnvoi",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="w-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Envoi
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <p className="text-14-medium text-center">{row.original.dateEnvoi}</p>
      );
    },
  },
  {
    accessorKey: "heureEnvoi",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="w-full"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Heure Envoi
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      {
        return (
          <p className="text-14-medium text-center">
            {row.original.heureEnvoi}
          </p>
        );
      }
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="pl-4">Status</div>,
    cell: ({ row }) => (
      <div className="flex items-center">
        <OrdonnanceStatusIcon status={row.original.status} />{" "}
        {row.original.status}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => (
      <div className="flex gap-5 items-center">
        <UpdateOrdonnanceDialog
          montant={row.original.montant}
          id={row.original.id}
          status={row.original.status}
        />
        <a
          href={`${row.original.imageUrl}`}
          download={`ordonnance_${row.original.id}.jpg`}
          className="text-green-500 hover:text-green-700"
          title="Télécharger l'image"
        >
          <FaDownload className="w-5 h-5" size={18} />
        </a>
      </div>
    ),
  },
];
