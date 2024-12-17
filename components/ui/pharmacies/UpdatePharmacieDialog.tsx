import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pharmacie } from "@/types/types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UpdatePharmacieForm } from "./UpdatePharmacieForm";
interface UpdatePharmacieDialogProps {
  pharmacie: Pharmacie;
}
export const UpdatePharmacieDialog: React.FC<UpdatePharmacieDialogProps> = ({
  pharmacie,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <FaEdit
            className="text-blue-500 cursor-pointer transition hover:opacity-85"
            title="Modifier"
            size={18}
          />
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle>
              Mettre à jour les informations de la pharmacie
            </DialogTitle>
            <DialogDescription>
              Veuillez remplir le formulaire ci-dessous pour modifier les
              informations de la pharmacie.
            </DialogDescription>
          </DialogHeader>
          <UpdatePharmacieForm pharmacie={pharmacie} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
