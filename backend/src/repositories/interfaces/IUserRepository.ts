import { User } from "../../entities/User";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
interface IRequestLoginUser {
  id?: string;
  name: string;
  email: string;
}

interface IUserRepository {
  create({ name, email, password }: ICreateUser): Promise<void>;
  profile(id: string): Promise<User>;
  login(email: string, password: string, salt: string): Promise<IRequestLoginUser>;
  salt(length: number): Promise<string>;
  encryptPassword(password: string, salt: string): Promise<string>;
  findByEmail(email: string): Promise<User>;
}

export { ICreateUser, IUserRepository, IRequestLoginUser };