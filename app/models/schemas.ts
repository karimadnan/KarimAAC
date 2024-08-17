import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(250),
  password: z.string().min(3, { message: "Invalid password" }).max(250),
});

export const createAccountSchema = z
  .object({
    email: z.string().trim().email().max(250),
    password: z.string().min(6).max(250),
    confirmPassword: z.string().max(250),
    characterName: z
      .string()
      .min(3, { message: "Name must contain at least 3 characters." })
      .max(20, { message: "Name cannot exceed 20 characters." }),
    sex: z.string(),
    vocation: z.number(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match.",
    path: ["confirmPassword"],
  });
