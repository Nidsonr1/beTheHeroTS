import { Router } from "express";

import createOngController from '../useCases/ong/createOng';
import listOngsController from "../useCases/ong/listOngs";

const ongRoutes = Router();

ongRoutes.post("/create", (request, response) => {
  return createOngController().handle(request, response);
});

ongRoutes.get('/', (request, response) => {
  return listOngsController().handle(request, response);
});

export { ongRoutes }