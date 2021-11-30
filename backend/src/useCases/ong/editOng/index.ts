import { OngRepository } from "../../../repositories/OngRepository"
import { EditOngController } from "./EditOngController";
import { EditOngUseCase } from "./EditOngUseCase";



export default () => {
  const ongRepository = new OngRepository();
  const editOngUseCase = new EditOngUseCase(ongRepository);
  const editOngController = new EditOngController(editOngUseCase);

  return editOngController;
}