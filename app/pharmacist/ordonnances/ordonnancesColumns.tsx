"use client";

import { Button } from "@/components/ui/button";
import { OrdonnanceStatusIcon } from "@/components/ui/ordonnances/OrdonnanceStatusIcon";
import { DeleteUserDialog } from "@/components/ui/users/DeleteUserDialog";
import { UpdateUserDialog } from "@/components/ui/users/UpdateUserDialog";
import { Ordonnance } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const ordonnancesColumns: ColumnDef<Ordonnance>[] = [
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
      const relativeDate = dayjs(row.original.dateEnvoi).fromNow();
      return <p className="text-14-medium text-center">{relativeDate}</p>;
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
    cell: ({ row }) => <div className="flex gap-5 justify-center"></div>,
  },
];
