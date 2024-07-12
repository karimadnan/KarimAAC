"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAccountModel } from "@karimACC/app/models/common";
import { createAccountSchema } from "@karimACC/app/models/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@karimACC/app/ui/components/form";
import { Input } from "@karimACC/app/ui/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@karimACC/app/ui/components/radio-group";
import { Separator } from "@karimACC/app/ui/components/separator";
import { useForm } from "react-hook-form";
import { VOCATIONS_OPTIONS } from "./config";
import Image from "next/image";
import { cn } from "@karimACC/app/util/common";
import { Button } from "@karimACC/app/ui/components/button";
import { useRouter } from "next/navigation";

export default function CreateAccountForm() {
  const router = useRouter();

  const form = useForm<CreateAccountModel>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      characterName: "",
      sex: "",
      vocation: 1,
    },
  });

  function onSubmit(values: CreateAccountModel) {
    console.log(values, "values");
  }

  return (
    <div className="w-full p-5">
      <Form<CreateAccountModel> {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <div className="flex gap-2 my-4">
            <div className="w-1/2">
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator />

          <div className="my-2">
            <FormField
              name="characterName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Character Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Character Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="space-y-3 p-2 mt-2">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"1"} />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"0"} />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="vocation"
            render={({ field }) => (
              <FormItem className="space-y-3 p-2 mt-2">
                <FormControl>
                  <div className="grid grid-cols-vocations-grid gap-2">
                    {VOCATIONS_OPTIONS.map((vocation) => (
                      <div
                        key={vocation.value}
                        className={cn(
                          "border rounded-md p-5 flex flex-col justify-between items-center",
                          field.value === vocation.value && "border-green-500"
                        )}
                        role="button"
                        onClick={() =>
                          field.onChange(() =>
                            form.setValue("vocation", vocation.value)
                          )
                        }
                      >
                        <p className="text-xl font-bold">{vocation.name}</p>
                        <Image
                          className="object-contain"
                          src={vocation.image}
                          alt={`${vocation.name}-image`}
                          height={64}
                          width={64}
                        />
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-2 w-full grid place-items-center gap-2">
            <Button className="w-full md:w-1/2" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <div className="mt-2 w-full grid place-items-center gap-2">
          <Button
            className="w-full md:w-1/2"
            variant="destructive"
            onClick={() => router.push("/account")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
