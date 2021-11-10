import { Request, Response } from "express";
import { ListOngsUseCase } from "./ListOngsUseCase";

class ListOngsController {
  constructor(private listOngsUseCase: ListOngsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const ongs = await this.listOngsUseCase.execute();

      return response.status(200).json(ongs);
    } catch (error) {
      return response.status(404).json({ error: error.message });    
    }
  }
}

export { ListOngsController }