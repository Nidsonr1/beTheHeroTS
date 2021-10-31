import { Ong } from "../../entities/Ong";

interface ICreateOngDTO {
  id?: string;
  name: string;
  description: string;
  email: string;
  password: string;
  whatsapp: string;
  city: string;
  uf: string;
}

interface IOngRepository {
  create(data: ICreateOngDTO): Promise<void>;
  list(): Promise<Ong[]>
  findByName(name: string): Promise<Ong>
}

export { ICreateOngDTO, IOngRepository }