import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { UpdateUserForm } from "./UpdateUserForm";
import { type } from "os";
import { Utilisateur } from "@/types/types";
interface IUsersDialogProps {
  utilisateur: Utilisateur;
}
export const UpdateUserDialog: React.FC<IUsersDialogProps> = ({
  utilisateur,
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
              Mettre à jour les informations de l'utilisateur
            </DialogTitle>
            <DialogDescription>
              Veuillez remplir le formulaire ci-dessous pour modifier les
              informations de l'utilisateur.
            </DialogDescription>
          </DialogHeader>
          <UpdateUserForm utilisateur={utilisateur} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
