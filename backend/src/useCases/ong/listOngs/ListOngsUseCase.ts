import { Ong } from "../../../entities/Ong";
import { OngRepository } from "../../../repositories/OngRepository";

class ListOngsUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute(): Promise<Ong[]> {
    const ongs = await this.ongRepository.list();

    if(ongs.length <= 0) {
      throw new Error("No ONG Registered");
    }
    
    return ongs;
  }
}

export { ListOngsUseCase }