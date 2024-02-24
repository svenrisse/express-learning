import type { Request, Response } from "express";
import { log } from "../utils/logger";
import { createUser } from "../service/user.service";
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
  } catch (e) {
    log.error(e);
    return res.status(409).send(String(e));
  }
};
