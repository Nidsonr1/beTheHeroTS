import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("ongs")
class Ong {
  @PrimaryColumn()
  id?: string;
  
  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @Column()
  email: string;
  

  password: string;
  

  whatsapp: string;
  

  city: string;
  

  uf: string;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ong }