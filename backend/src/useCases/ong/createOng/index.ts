import { OngRepository } from "../../../repositories/OngRepository";
import { CreateOngController } from "./CreateOngController";
import { CreateOngUseCase } from "./CreateOngUseCase";

export default () => {
  const ongRepository = new OngRepository();
  const createOngUseCase = new CreateOngUseCase(ongRepository);
  const createOngController = new CreateOngController(createOngUseCase);

  return createOngController;
}

