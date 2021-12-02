import { IOngRepository } from "repositories/interfaces/IOngRepository";
import { Ong } from "../../../entities/Ong";

class LoginOngUseCase {
  constructor(private ongRepository: IOngRepository) {}

  async execute(email: string, password: string): Promise<Ong> {
    const ongAlreadyExist = await this.ongRepository.findByEmail(email);

    if(!ongAlreadyExist) throw new Error("Email not registered");
    
    const ong = await this.ongRepository.login(email, password, ongAlreadyExist.salt);
    if(!ong) throw new Error("Incorrect password");
    
    return ong;
  }
}

export { LoginOngUseCase }