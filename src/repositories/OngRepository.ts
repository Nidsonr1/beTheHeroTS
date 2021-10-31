import { getRepository, Repository } from 'typeorm';
import { Ong } from '../entities/Ong';
import { ICreateOngDTO, IOngRepository } from './interfaces/IOngRepository';

class OngRepository implements IOngRepository {
  private repository: Repository<Ong>;
  
  constructor() {
    this.repository = getRepository(Ong);
  }

  async create(data: ICreateOngDTO): Promise<void> {
    const { id, name, description, email, password, whatsapp, city, uf } = data;

    const ong = this.repository.create({
      id,
      name,
      description,
      email,
      password, 
      whatsapp,
      city,
      uf
    });

    await this.repository.save(ong);
  }

  async list(): Promise<Ong[]> {
    const ongs = await this.repository.find();
    return ongs; 
  }

  async findByName(name: string): Promise<Ong> {
    const ong = await this.repository.findOne({ name });
    return ong;
  }
}

export { OngRepository }