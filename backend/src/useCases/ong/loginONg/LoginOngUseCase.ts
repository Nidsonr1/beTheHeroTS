import { Ong } from "../../../entities/Ong";
import { IRequestLogin } from "../../../repositories/interfaces/IOngRepository";
import { OngRepository } from "../../../repositories/OngRepository";

class LoginOngUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute(email: string, password: string): Promise<Ong> {
    const ongAlreadyExist = await this.ongRepository.findByEmail(email);
    if(!ongAlreadyExist) {
      throw new Error("Email does not valid");
    }
    
    const ong = await this.ongRepository.login(email, password, ongAlreadyExist.salt);
    if(!ong) {
      throw new Error("Ong does not exist");
    }
    
    return ong;
  }
}

export { LoginOngUseCase }