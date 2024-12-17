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
import { AddPharmacieForm } from "./AddPharmacieForm";

export const AddPharmacyDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="shad-primary-btn">
            Ajouter Pharmacie
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle className="capitalize">
              Ajouter une nouvelle pharmacie
            </DialogTitle>
            <DialogDescription>
              Remplissez le formulaire pour ajouter un nouvel pharmacie.
            </DialogDescription>
            <AddPharmacieForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
