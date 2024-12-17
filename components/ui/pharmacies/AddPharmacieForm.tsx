import { addNewPharmacie } from "@/app/api/pharmacies/pharmacies";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { AddUpdatePharmacieFormSchema } from "@/lib/validation";
import { PharmacieStatus } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "../form";

export const AddPharmacieForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddUpdatePharmacieFormSchema>>({
    resolver: zodResolver(AddUpdatePharmacieFormSchema),
    defaultValues: {
      adresse: "",
      latitude: undefined,
      longitude: undefined,
      nom: "",
      responsable: "",
      status: PharmacieStatus.Active,
    },
  });

  async function onSubmit({
    adresse,
    latitude,
    longitude,
    nom,
    responsable,
    status,
  }: z.infer<typeof AddUpdatePharmacieFormSchema>) {
    setIsLoading(true);
    const pharmacieData = {
      adresse,
      latitude,
      longitude,
      nom,
      responsable,
      status,
    };

    try {
      await addNewPharmacie(pharmacieData);
      toast({
        title: "Pharmacie ajoutée avec succès",
        description: `${nom} a été ajouté avec succès.`,
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
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="nom"
          label="Nom"
          placeholder="Al Chifa Pharmacie"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="adresse"
          label="Adresse"
          placeholder="Hai El Badr"
        />
        <div className="flex space-x-4">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="latitude"
            label="Latitude"
            placeholder="0.0"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="longitude"
            label="Longitude"
            placeholder="0.0"
          />
        </div>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="responsable"
          label="Responsable"
          placeholder="Ali Ben"
        />

        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="status"
          label="Status"
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex h-11 gap-6 xl:justify-between"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {Object.values(PharmacieStatus).map((option) => (
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
        />
        <SubmitButton isLoading={isLoading}>Ajouter</SubmitButton>
      </form>
    </Form>
  );
};
