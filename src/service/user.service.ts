import { UserModel, type UserInput } from "../models/user.model";

export const createUser = async (input: UserInput) => {
  try {
    return await UserModel.create(input);
  } catch (e) {
    throw new Error(String(e));
  }
};
