import { IRequestLoginUser, IUserRepository } from "../../../repositories/interfaces/IUserRepository";

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute( email: string, password: string ): Promise<IRequestLoginUser> {
    const userAlready = await this.userRepository.findByEmail(email);

    if(!userAlready) throw new Error("Email not registered");

    const user = await this.userRepository.login( email, password, userAlready.salt );

    if(!user) throw new Error("Incorrect password");

    return user;
  }
}

export { LoginUserUseCase }