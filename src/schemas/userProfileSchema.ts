import { z } from "zod";

const userProfileSchema = z.object({
  id: z.uuid(),
  displayName: z.nullable(z.string()),
  avatarUrl: z.nullable(z.string()),
  experienceLevel: z.string(),
  xp: z.int(),
  dayStreak: z.int(),
  level: z.int(),
});

export default userProfileSchema;
