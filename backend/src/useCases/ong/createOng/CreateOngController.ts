
import { Request, Response } from 'express';
import { CreateOngUseCase } from './CreateOngUseCase';

class CreateOngController {
  constructor(private createOngUseCase: CreateOngUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { 
        name,
        description,
        email,
        password,
        whatsapp,
        city,
        uf
      } = request.body;
  
      await this.createOngUseCase.execute({
        name,
        description,
        email,
        password,
        whatsapp,
        city,
        uf
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateOngController }