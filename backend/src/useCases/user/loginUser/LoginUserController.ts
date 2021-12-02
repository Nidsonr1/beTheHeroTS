import { Request, Response } from 'express';
import { LoginUserUseCase } from './LoginUserUseCase';

class LoginUserController {
  constructor(private loginUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const user = await this.loginUseCase.execute(email, password);

      return response.status(200).json(user);
    } catch (error) {
      switch(error.message) {
        case 'Email not registered':
          return response.status(404).json({ error: error.message });
        case 'Incorrect password':
          return response.status(400).json({ error: error.message });
        default:
          return response.status(500).json({ error: "Problema Interno!" });
      }
        
    }
  }
}

export { LoginUserController }