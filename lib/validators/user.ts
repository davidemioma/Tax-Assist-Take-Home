import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
});

export type UserValidator = z.infer<typeof UserSchema>;
