import { Router } from "express";

import createOngController from '../useCases/ong/createOng';
import listOngsController from "../useCases/ong/listOngs";
import loginOngController from "../useCases/ong/loginONg";

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

export { ongRoutes }