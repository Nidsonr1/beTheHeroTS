import { Router } from "express";
import { checkOngById } from "../middlewares/checkOngById";

import createOngController from '../useCases/ong/createOng';
import listOngsController from "../useCases/ong/listOngs";
import loginOngController from "../useCases/ong/loginONg";
import editOngController from '../useCases/ong/editOng';

const ongRoutes = Router();

ongRoutes.post("/create", (request, response) => {
  return createOngController().handle(request, response);
});

ongRoutes.get('/', (request, response) => {
  return listOngsController().handle(request, response);
});

ongRoutes.post('/login', (request, response) => {
  return loginOngController().handle(request, response);
});

ongRoutes.patch('/:id/edit', checkOngById, (request, response) => {
  return editOngController().handle(request, response)
});

export { ongRoutes }