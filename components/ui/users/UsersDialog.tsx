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
interface IUsersDialogProps {
  type: "modefier" | "supprimer";
}
export const UsersDialog: React.FC<IUsersDialogProps> = ({ type }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {type === "supprimer" ? (
            <FaTrash
              className="text-red-500 cursor-pointer transition hover:opacity-85"
              title="Supprimer"
              size={18}
            />
          ) : (
            <FaEdit
              className="text-blue-500 cursor-pointer transition hover:opacity-85"
              title="Modifier"
              size={18}
            />
          )}
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle className="capitalize">
              {type} L'utilisateur
            </DialogTitle>
            <DialogDescription>
              {type === "supprimer" ? (
                <p>
                  Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette
                  action est irréversible.
                </p>
              ) : (
                <p>something</p>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
