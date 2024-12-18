import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { AddUpdatePharmacieFormSchema } from "@/lib/validation";
import { Pharmacie, PharmacieStatus } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "../form";
import { RadioGroup, RadioGroupItem } from "../radio-group";
export interface UpdatePharmacieFormProps {
  pharmacie: Pharmacie;
}
export const UpdatePharmacieForm: React.FC<UpdatePharmacieFormProps> = ({
  pharmacie,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddUpdatePharmacieFormSchema>>({
    resolver: zodResolver(AddUpdatePharmacieFormSchema),
    defaultValues: {
      adresse: pharmacie.adresse,
      latitude: pharmacie.latitude.toString(),
      longitude: pharmacie.longitude.toString(),
      nom: pharmacie.nom,
      responsable: pharmacie.responsable,
      status: pharmacie.status,
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
      const response = await fetch("/api/pharmacies", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...pharmacieData,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        }),
      });

      if (!response.ok) {
        throw new Error("Mise à jour échouée");
      }
      toast({
        title: "Mise à jour réussie",
        description: `Les informations de la pharmacie ${nom} ont été mises à jour.`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de la mise à jour",
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
        ></CustomFormField>
        <SubmitButton isLoading={isLoading}>Modifier</SubmitButton>
      </form>
    </Form>
  );
};
