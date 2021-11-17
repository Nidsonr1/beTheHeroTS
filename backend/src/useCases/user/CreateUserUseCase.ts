import { ICreateUser, IUserRepository } from "../../repositories/interfaces/IUserRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: ICreateUser): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if(userAlreadyExist) {
      throw new Error ("User already exist");
    }

    this.userRepository.create({ name, email, password });
  };
}

export { CreateUserUseCase }