import { Ong } from "../../entities/Ong";

interface ICreateOngDTO {
  id?: string;
  name: string;
  description: string;
  email: string;
  password: string;
  salt?: string;
  whatsapp: string;
  city: string;
  uf: string;
}

interface IFindByEmailAndName {
  name: string;
  email: string;
}

interface IOngRepository {
  create(data: ICreateOngDTO): Promise<void>;
  list(): Promise<Ong[]>
  findByEmailAndName(data: IFindByEmailAndName): Promise<Ong>;
  salt(length: number): Promise<string>;
  encryptPassword(password: string, salt: string): Promise<string>;
}

export { ICreateOngDTO, IOngRepository, IFindByEmailAndName }