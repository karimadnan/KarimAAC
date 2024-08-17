import { z } from "zod";
import { createAccountSchema, userSchema } from "./schemas";

export type DefaultApiResponse = { message: string } | undefined;

export type UserModel = z.infer<typeof userSchema>;

export type CreateAccountModel = z.infer<typeof createAccountSchema>;

export type FormState = { message: string } | undefined;
