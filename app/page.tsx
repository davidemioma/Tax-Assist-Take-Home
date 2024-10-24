"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import useAttendance from "@/hooks/use-attendance";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserValidator, UserSchema } from "@/lib/validators/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const router = useRouter();

  const { addUser, users } = useAttendance();

  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | null>(null);

  const form = useForm<UserValidator>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: UserValidator) => {
    startTransition(() => {
      const userExists = users.some(
        (user) => user.username.toLowerCase() === values.username.toLowerCase()
      );

      if (userExists) {
        setError("Username already exists.");

        return;
      }

      addUser({ username: values.username, status: "Absent" });

      router.push(`/users/${values.username}`);
    });
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center px-5">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <CardTitle className="sm:text-2xl">Hi, Welcome to Location</CardTitle>

          {!isPending && (
            <Link
              href="/users"
              className={cn(buttonVariants({ size: "sm" }))}
              data-cy="all-users-btn"
            >
              View all Users
            </Link>
          )}
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              data-cy="user-form"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="John..."
                        {...field}
                        disabled={isPending}
                        data-cy="form-input"
                      />
                    </FormControl>

                    {error && (
                      <p
                        className="text-red-500 font-medium"
                        data-cy="error-message"
                      >
                        {error}
                      </p>
                    )}

                    <FormMessage data-cy="form-error-message" />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isPending} data-cy="submit-btn">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
