"use client";

import { createUser } from "@/app/api/utilisateurs/utilisateurs";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { Form, FormControl } from "@/components/ui/form";
import { AddUserFormSchema } from "@/lib/validation";
import { RoleUtilisateur } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

export const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof AddUserFormSchema>>({
    resolver: zodResolver(AddUserFormSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      motDePasse: "",
      role: undefined,
    },
  });

  async function onSubmit({
    nom,
    prenom,
    email,
    motDePasse,
    role,
  }: z.infer<typeof AddUserFormSchema>) {
    setIsLoading(true);
    const userData = {
      nom,
      prenom,
      email,
      motDePasse,
      role: role as RoleUtilisateur,
    };
    try {
      await createUser(userData);
    } catch (error) {
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
        {/* <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="role"
          label="Role"
          placeholder="Select a role"
        >
          <SelectItem value="pharmacist">Pharmacist</SelectItem>
          <SelectItem value="patient">Patient</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </CustomFormField> */}
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
