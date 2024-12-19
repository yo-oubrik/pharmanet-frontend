import { validCredentials } from "@/app/repo/utilisateurs";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { Form } from "@/components/ui/form";
import { AddUpdateUserFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddUpdateUserFormSchema>>({
    resolver: zodResolver(AddUpdateUserFormSchema),
    defaultValues: {
      email: "",
      motDePasse: "",
    },
  });

  async function onSubmit({
    email,
    motDePasse,
  }: z.infer<typeof AddUpdateUserFormSchema>) {
    setIsLoading(true);
    const userData = {
      email,
      motDePasse,
    };

    try {
      // if (!(await validCredentials(userData))) {
      //   throw new Error("Failed to add user");
      // }
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
        <SubmitButton isLoading={isLoading}>Login</SubmitButton>
      </form>
    </Form>
  );
};
