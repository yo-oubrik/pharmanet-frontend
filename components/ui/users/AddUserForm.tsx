import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { Form, FormControl } from "@/components/ui/form";
import { AddUpdateUserFormSchema } from "@/lib/validation";
import { RoleUtilisateur } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

export const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddUpdateUserFormSchema>>({
    resolver: zodResolver(AddUpdateUserFormSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      motDePasse: "",
      role: RoleUtilisateur.Patient,
    },
  });

  async function onSubmit({
    nom,
    prenom,
    email,
    motDePasse,
    role,
  }: z.infer<typeof AddUpdateUserFormSchema>) {
    setIsLoading(true);
    const userData = {
      nom,
      prenom,
      email,
      motDePasse,
      role: role as RoleUtilisateur,
    };

    try {
      const response = await fetch("/api/utilisateurs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      toast({
        title: "Utilisateur ajouté avec succès",
        description: `${nom} ${prenom} a été ajouté comme ${role}.`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'ajout",
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
        <div className="flex space-x-4">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="nom"
            label="Nom"
            placeholder="Ali"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="prenom"
            label="Prenom"
            placeholder="Ben"
          />
        </div>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Email"
        />
        <CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="motDePasse"
          label="Mot de passe"
          placeholder="Mot de passe"
        />
        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="role"
          label="Role"
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex h-11 gap-6 xl:justify-between"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {Object.values(RoleUtilisateur).map((option) => (
                  <div key={option} className="radio-group" id={option}>
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        ></CustomFormField>
        <SubmitButton isLoading={isLoading}>Ajouter</SubmitButton>
      </form>
    </Form>
  );
};
