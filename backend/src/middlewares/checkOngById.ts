import { NextFunction, Request, Response } from "express";
import { OngRepository } from "../repositories/OngRepository";

async function checkOngById (request: Request, response: Response, next: NextFunction) {
  const repository = new OngRepository();

  const { id } = request.params;

  const ong = await repository.findById(id);

  if(!ong) {
    throw new Error("Ong does not found");
  }
  next();
}

export { checkOngById }