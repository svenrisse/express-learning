import { type Express } from "express";
import { createUserHandler } from "./controller/user.controller";
import { validate } from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
export const routes = ({ app }: { app: Express }) => {
  app.get("/healthcheck", (req, res) => {
    res.sendStatus(200);
  });
  app.post("/api/users", validate(createUserSchema), createUserHandler);
};
