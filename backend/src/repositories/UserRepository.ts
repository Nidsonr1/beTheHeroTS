import { getRepository, Repository } from "typeorm";
import crypto from 'crypto';

import { User } from "../entities/User";
import { ICreateUser, IUserRepository } from "./interfaces/IUserRepository";

class UserRepository implements IUserRepository{
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUser): Promise<void> {
    const salt = await this.salt(16);
    const encryptPassword = await this.encryptPassword(password, salt);

    const user = this.repository.create({
      name,
      email,
      password: encryptPassword,
      salt
    });

    await this.repository.save(user);
  }
  
  async profile(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async login(email: string, password: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async salt(length: number): Promise<string> {
    const salt = crypto.randomBytes(Math.ceil(length/2))
    .toString("hex")
    .slice(0, 16);
  return salt;
  }

  async encryptPassword(password: string, salt: string): Promise<string> {
    let hash = crypto.createHmac("sha512", salt)
    hash.update(password);

    const encryptPassword = hash.digest("hex");
    return encryptPassword;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

}

export { UserRepository }