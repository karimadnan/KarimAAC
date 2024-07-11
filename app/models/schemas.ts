import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(250),
  password: z.string().min(3, { message: "Invalid password" }).max(250),
});

export const createAccountSchema = z
  .object({
    email: z.string().email().max(250),
    password: z.string().min(6).max(250),
    confirmPassword: z.string().max(250),
    characterName: z.string().min(3).max(20),
    sex: z.union([
      z.string().length(1, { message: "Please choose your charater sex." }),
      z.number(),
    ]),
    vocation: z.number().min(1).max(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match.",
    path: ["confirmPassword"],
  });
