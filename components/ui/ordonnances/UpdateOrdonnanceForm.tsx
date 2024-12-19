import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { UpdateOrdonnanceFormSchema } from "@/lib/validation";
import { OrdonnanceStatus } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "../form";
import { RadioGroup, RadioGroupItem } from "../radio-group";
export interface UpdateOrdonnanceFormProps {
  id?: number;
  status: OrdonnanceStatus;
  montant?: number;
}
export const UpdateOrdonnanceForm: React.FC<UpdateOrdonnanceFormProps> = ({
  id,
  status,
  montant,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof UpdateOrdonnanceFormSchema>>({
    resolver: zodResolver(UpdateOrdonnanceFormSchema),
    defaultValues: {
      status,
      montant: montant ? montant.toString() : "",
    },
  });
  const currentStatus = useWatch({
    control: form.control,
    name: "status",
  });
  async function onSubmit({
    status,
    montant,
  }: z.infer<typeof UpdateOrdonnanceFormSchema>) {
    setIsLoading(true);
    const ordonnanceData = {
      id,
      status,
      montant,
    };

    try {
      const response = await fetch("/api/ordonnances", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ordonnanceData),
      });

      if (!response.ok) {
        throw new Error("Mise à jour échouée");
      }
      toast({
        title: "Mise à jour réussie",
        description: `Le status de l'ordonnance a été mis à jour avec succès.`,
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
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="status"
          label="Status"
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="grid grid-cols-2 gap-2"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {Object.values(OrdonnanceStatus).map((option) => (
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
        {currentStatus === OrdonnanceStatus.Completed && (
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="montant"
            label="Montant"
          />
        )}
        <SubmitButton isLoading={isLoading}>Modifier</SubmitButton>
      </form>
    </Form>
  );
};
