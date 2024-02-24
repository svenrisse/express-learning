import { type Express } from "express";
export const routes = ({ app }: { app: Express }) => {
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.get("/healthcheck", (req, res) => {
    res.sendStatus(200);
  });
};
