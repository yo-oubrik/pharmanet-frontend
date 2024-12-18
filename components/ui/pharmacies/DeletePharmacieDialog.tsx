import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { DeletePharmacieForm } from "./DeletePharmacieForm";
interface IUsersDialogProps {
  id?: number;
}
export const DeletePharmacieDialog: React.FC<IUsersDialogProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <FaTrash
            className="text-red-500 cursor-pointer transition hover:opacity-85"
            title="Supprimer"
            size={18}
          />
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle>Supprimer la pharmacie</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cette pharmacie ? Cette action
              est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DeletePharmacieForm id={id} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
