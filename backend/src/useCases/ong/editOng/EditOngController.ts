import { Request, Response } from "express";
import { EditOngUseCase } from "./EditOngUseCase";

class EditOngController {
  constructor(private editOngUseCase: EditOngUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { 
        name,
        description,
        email,
        whatsapp,
        city,
        uf
      } = request.body;

      const { id } = request.params
      const ong = await this.editOngUseCase.execute({
        id,
        name,
        description,
        email,
        whatsapp,
        city,
        uf
      });

      return response.status(200).json(ong)
    } catch (error) {
      return response.status(400).send(error)
    }
  }  
}

export { EditOngController }