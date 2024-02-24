import type { Request, Response } from "express";
import { log } from "../utils/logger";
import { createUser } from "../service/user.service";
import type { createUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export const createUserHandler = async (
  req: Request<object, object, createUserInput["body"]>,
  res: Response,
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    log.error(e);
    return res.status(409).send(String(e));
  }
};
