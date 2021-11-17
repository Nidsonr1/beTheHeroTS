import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      await this.createUserUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { CreateUserController }