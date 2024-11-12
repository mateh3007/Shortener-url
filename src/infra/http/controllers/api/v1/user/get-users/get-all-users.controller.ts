import { Request, Response } from "express"
import { container } from "tsyringe";
import { GetAllUsersUseCase } from "../../../../../../../aplication/useCases/users/get-users/get-all-users.use-case";

export const GetAllUsersController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUsersUseCase = container.resolve(GetAllUsersUseCase);
    const users = await getUsersUseCase.handle();

    return res.status(201).json(users);
  } catch (error: any) {
    console.log(error)
    return res.status(error.statusCode).json({ message: error.message });
  }
}