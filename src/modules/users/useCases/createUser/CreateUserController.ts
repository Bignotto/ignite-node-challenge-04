import { Response, Request } from "express";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // TODO: post user
    const { name, email } = request.body;
    const usersRepository = UsersRepository.getInstance();
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const user = createUserUseCase.execute({ name, email });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
