import { OngRepository } from "../../../repositories/OngRepository"
import { ListOngsController } from "./ListOngsController";
import { ListOngsUseCase } from "./ListOngsUseCase";



export default () => {
  const ongRepository = new OngRepository();
  const listOngsUseCase = new ListOngsUseCase(ongRepository);
  const listOngsController = new ListOngsController(listOngsUseCase);

  return listOngsController;
}