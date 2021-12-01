import { Router } from "express";

import createUserController from "../useCases/user/createUser";

const userRoutes = Router();

userRoutes.post('/create', (request, response) => {
  return createUserController().handle(request, response);
}); 

export { userRoutes };