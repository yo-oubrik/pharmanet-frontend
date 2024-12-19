import {
  OrdonnanceStatus,
  PharmacieStatus,
  RoleUtilisateur,
} from "@/types/types";
import { z } from "zod";

export const AddUpdateUserFormSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  prenom: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères",
  }),
  email: z.string().email({
    message: "Adresse email invalide",
  }),
  motDePasse: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
  role: z.nativeEnum(RoleUtilisateur, {
    message: "Veuillez sélectionner un rôle valide",
  }),
});
export const AddUpdatePharmacieFormSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  adresse: z.string().min(2, {
    message: "L'adresse doit contenir au moins 2 caractères",
  }),
  status: z.nativeEnum(PharmacieStatus, {
    message: "Veuillez sélectionner un statut valide",
  }),
  latitude: z
    .string()
    .refine(
      (v) =>
        !isNaN(parseFloat(v)) && parseFloat(v) >= -90 && parseFloat(v) <= 90,
      {
        message: "La latitude doit être comprise entre -90 et 90",
      }
    ),

  longitude: z
    .string()
    .refine(
      (v) =>
        !isNaN(parseFloat(v)) && parseFloat(v) >= -180 && parseFloat(v) <= 180,
      {
        message: "La longitude doit être comprise entre -180 et 180",
      }
    ),

  responsable: z.string().min(2, {
    message: "Le nom du responsable doit contenir au moins 2 caractères",
  }),
});
export const UpdateOrdonnanceFormSchema = z
  .object({
    status: z.nativeEnum(OrdonnanceStatus, {
      message: "Veuillez sélectionner un statut valide",
    }),
    montant: z.string().optional(),
  })
  .refine(
    (data) =>
      data.status !== OrdonnanceStatus.Completed ||
      (data.montant && data.montant.trim() !== ""),
    {
      path: ["montant"],
      message: "Le montant est requis lorsque le statut est 'completed'.",
    }
  );

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number"
    ),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  insuranceProvider: z
    .string()
    .min(2, "Insurance name must be at least 2 characters")
    .max(50, "Insurance name must be at most 50 characters"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Policy number must be at least 2 characters")
    .max(50, "Policy number must be at most 50 characters"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
