import { Request, Response } from "express";
import { User } from "../../../entities/User";
import { IRequestLogin } from "../../../repositories/interfaces/IOngRepository";
import { LoginOngUseCase } from "./LoginOngUseCase";

class LoginOngController {
  constructor(private loginOngUseCase: LoginOngUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{ 
    try {
      const { email, password } = request.body;

      const ong = await this.loginOngUseCase.execute(email, password);
      return response.status(200).json(ong);
    } catch (error) {
      switch(error.message) {
        case 'Email not registered':
          return response.status(404).json({ error: error.message });
        case 'Incorrect password':
          return response.status(400).json({ error: error.message });
        default:
          return response.status(500).json({ error: "Problema Interno!"});
      }
    }
   }
}

export { LoginOngController }