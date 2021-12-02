import { Router } from "express";

import createUserController from "../useCases/user/createUser";
import loginUserUseCase from '../useCases/user/loginUser'

const userRoutes = Router();

userRoutes.post('/create', (request, response) => {
  return createUserController().handle(request, response);
}); 
userRoutes.post('/login', (request, response) => {
  return loginUserUseCase().handle(request, response);
});

export { userRoutes };