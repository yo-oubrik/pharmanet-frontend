import { deleteUser } from "@/app/api/utilisateurs/utilisateurs";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import {
  AddUpdateUserFormSchema,
  DeleteUserFormSchema,
} from "@/lib/validation";
import { useState } from "react";
import { z } from "zod";
import { Form } from "../form";
import { format } from "path";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface IDeleteUserFormProps {
  id: number;
}

export const DeleteUserForm: React.FC<IDeleteUserFormProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof DeleteUserFormSchema>>({
    resolver: zodResolver(AddUpdateUserFormSchema),
    defaultValues: {
      id: undefined,
    },
  });
  async function onSubmit({ id }: z.infer<typeof DeleteUserFormSchema>) {
    setIsLoading(true);
    try {
      await deleteUser(id);
      toast({
        title: "Utilisateur supprimé avec succès",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de la suppression",
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SubmitButton isLoading={isLoading}>Supprimer</SubmitButton>
      </form>
    </Form>
  );
};
