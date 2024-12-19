import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrdonnanceStatus } from "@/types/types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UpdateOrdonnanceForm } from "./UpdateOrdonnanceForm";
interface UpdateOrdonnanceDialogProps {
  id?: number;
  status: OrdonnanceStatus;
  montant?: number;
}
export const UpdateOrdonnanceDialog: React.FC<UpdateOrdonnanceDialogProps> = ({
  id,
  status,
  montant,
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
          <DialogHeader className="mb-0 space-y-3">
            <DialogTitle>Mettre à jour le status de l'ordonnance</DialogTitle>
            <DialogDescription>
              Veuillez remplir le formulaire ci-dessous pour modifier le status
              de l'ordonnance.
            </DialogDescription>
          </DialogHeader>
          <UpdateOrdonnanceForm id={id} status={status} montant={montant} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
