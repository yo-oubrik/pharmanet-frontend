"use client";

import { Button } from "@/components/ui/button";
import { DeleteUserDialog } from "@/components/ui/users/DeleteUserDialog";
import { UpdateUserDialog } from "@/components/ui/users/UpdateUserDialog";
import { UserRoleIcon } from "@/components/ui/users/UserRoleIcon";
import { Utilisateur } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const userColumns: ColumnDef<Utilisateur>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <p className="text-14-medium">{row.original.nom}</p>,
  },
  {
    accessorKey: "prenom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prenom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <p className="text-14-medium">{row.original.prenom}</p>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <p className="text-14-medium">{row.original.email}</p>,
  },
  {
    accessorKey: "role",
    header: () => <div className="pl-4">Role</div>,
    cell: ({ row }) => {
      const role = row.original.role;

      return (
        <div className="flex items-center">
          <UserRoleIcon role={role} /> {role}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-5 justify-center">
          <UpdateUserDialog utilisateur={row.original} />
          <DeleteUserDialog id={row.original.id} />
        </div>
      );
    },
  },
];
