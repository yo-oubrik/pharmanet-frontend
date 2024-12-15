"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../button";
import { AddUserForm } from "./AddUserForm";

export const AddUserDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="shad-primary-btn">
            Ajouter Utilisateur
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle className="capitalize">
              Ajouter un utilisateur
            </DialogTitle>
            <DialogDescription>
              Remplissez le formulaire pour ajouter un nouvel utilisateur.
            </DialogDescription>
            <AddUserForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
