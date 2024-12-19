import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { Form } from "@/components/ui/form";
import { LoginFormSchema } from "@/lib/validation";
import { RoleUtilisateur } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      motDePasse: "",
    },
  });

  async function onSubmit({
    email,
    motDePasse,
  }: z.infer<typeof LoginFormSchema>) {
    setIsLoading(true);
    const userData = {
      email,
      motDePasse,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de verification des credentials");
      }
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === RoleUtilisateur.Patient) {
        toast({
          variant: "destructive",
          title: "Erreur lors de la connexion",
          description: "Vous n'êtes pas autorisé à accéder à cette page.",
        });
        return;
      }
      if (user.role === RoleUtilisateur.Pharmacist) {
        router.push("/pharmacist");
      } else if (user.role === RoleUtilisateur.Admin) {
        router.push("/admin");
      }
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de la connexion",
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
