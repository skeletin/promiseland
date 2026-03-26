import { z } from "zod";

export const UserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  username: z.string(),
  userProfile: z.object({
    id: z.uuid(),

    username: z.string(),
  }),
});
