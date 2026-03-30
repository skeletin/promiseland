import { z } from "zod";
import userProfileSchema from "./userProfileSchema";

export const UserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  username: z.string(),
  userProfile: userProfileSchema,
});
