"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@karimACC/app/ui/components/button";
import { Input } from "@karimACC/app/ui/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "@karimACC/app/server/auth/auth";
import { UserModel } from "@karimACC/app/models/common";
import { userSchema } from "@karimACC/app/models/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@karimACC/app/ui/components/form";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const router = useRouter();

  const form = useForm<UserModel>({
    resolver: zodResolver(userSchema),
  });

  const submit = async (values: UserModel) => {
    if (!isLoading) {
      setIsLoading(true);
      setLoginErrorMessage("");
      try {
        const response = await signIn(values);
        if (response?.message) {
          setLoginErrorMessage(response.message);
        } else {
          // Refresh route after login is successful
          router.refresh();
        }
      } catch (error) {
        if (error instanceof Error) {
          setLoginErrorMessage(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Form<UserModel> {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {loginErrorMessage && (
          <p className="text-red-500 my-2">{loginErrorMessage}</p>
        )}
        <Button isLoading={isLoading} className="w-full my-2" type="submit">
          Login
        </Button>
      </form>
      <Button
        className="w-full"
        variant="positive"
        onClick={() => router.push("/account/create")}
      >
        Creat Account
      </Button>
    </Form>
  );
}
