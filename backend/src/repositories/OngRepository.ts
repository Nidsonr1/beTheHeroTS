import { getRepository, Repository } from 'typeorm';
import crypto from 'crypto';

import { Ong } from '../entities/Ong';
import { ICreateOngDTO, IOngRepository, IFindByEmailAndName } from './interfaces/IOngRepository';

class OngRepository implements IOngRepository {
  private repository: Repository<Ong>;
  
  constructor() {
    this.repository = getRepository(Ong);
  }

  async create(data: ICreateOngDTO): Promise<void> {
    const { id, name, description, email, password, whatsapp, city, uf } = data;

    const salt = await this.salt(16);

    const encryptPassword = await this.encryptPassword(password, salt);

    const ong = this.repository.create({
      id,
      name,
      description,
      email,
      password: encryptPassword,
      salt, 
      whatsapp,
      city,
      uf
    });

    await this.repository.save(ong);
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

  async list(): Promise<Ong[]> {
    const ongs = await this.repository
      .createQueryBuilder("ongs")
      .select([
        "ongs.id",
        "ongs.name",
        "ongs.description",
        "ongs.email",
        "whatsapp",
        "ongs.city",
        "ongs.uf"
      ])
      .getMany();
    return ongs; 
    throw new Error("Method not implemented");




  }

  async findByEmailAndName(data: IFindByEmailAndName): Promise<Ong> {
    const { name, email } = data;
    const ong = await this.repository.findOne({ name, email });
    return ong;
  }
}

export { OngRepository }