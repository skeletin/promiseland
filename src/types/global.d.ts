import { UserSchema } from "@/schemas/userSchema";
/**
 * Ambient global types. This file must be a module (`export {}`) so `declare global` merges correctly.
 *
 * Anything you put inside `declare global { ... }` is visible without importing.
 */
declare global {
  type User = z.infer<typeof UserSchema>;
}

export {};
