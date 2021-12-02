import { ICreateOngDTO, IOngRepository } from "../../../repositories/interfaces/IOngRepository";

class CreateOngUseCase{
  constructor(private ongRepository: IOngRepository) {}

  async execute(data: ICreateOngDTO): Promise<void> {
    const { name, description, email, password, whatsapp, city, uf} = data;

    const ongAlreadyExist = await this.ongRepository.findByEmailAndName({name, email});
    
    if(ongAlreadyExist) throw new Error("Ong already Exist");

    await this.ongRepository.create({
      name,
      description,
      email,
      password,
      whatsapp,
      city,
      uf
    });
  }
}
export { CreateOngUseCase }