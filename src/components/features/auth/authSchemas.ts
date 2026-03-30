import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const registerSchema = z
  .object({
    email: z.email("Invalid email"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // error shows on this field
  });

// Infer your types from the schemas instead of defining them manually
export type UserCredentials = z.infer<typeof loginSchema>;
export type NewUser = z.infer<typeof registerSchema>;
