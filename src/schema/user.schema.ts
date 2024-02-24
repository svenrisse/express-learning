import { object, string, type TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    password: string({ required_error: "Password is required" }).min(
      6,
      "Password to short - should be 6 chars minimum",
    ),
    confirmPassword: string({ required_error: "Password Confirm is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Not a valid email",
    ),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
});

export type createUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
