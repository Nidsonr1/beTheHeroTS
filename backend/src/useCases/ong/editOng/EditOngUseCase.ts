import { Ong } from "../../../entities/Ong";
import { IOngRepository, IEditOngDTO } from "../../../repositories/interfaces/IOngRepository";

class EditOngUseCase {
  constructor(private ongRepository: IOngRepository) {}

  async execute(data: IEditOngDTO): Promise<IEditOngDTO> {
    const { id, name, description, email, whatsapp, city, uf} = data;
    
    const ong = await this.ongRepository.edit({
      id,
      name,
      description,
      email,
      whatsapp,
      city,
      uf
    });

    return ong;
  }
}


export { EditOngUseCase }