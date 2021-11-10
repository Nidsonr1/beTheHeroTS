import { OngRepository } from "../../../repositories/OngRepository"
import { LoginOngController } from "./LoginOngController";
import { LoginOngUseCase } from "./LoginOngUseCase";



export default () => {
  const ongRepository = new OngRepository();
  const loginOngUseCase = new LoginOngUseCase(ongRepository);
  const loginOngController = new LoginOngController(loginOngUseCase);

  return loginOngController;
}