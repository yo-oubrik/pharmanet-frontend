import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../form";

interface IDeleteUserFormProps {
  id?: number;
}

export const DeleteUserForm: React.FC<IDeleteUserFormProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm();
  async function onSubmit() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/utilisateurs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
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
