import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
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
  
  @Column()
  password: string;
  
  @Column()
  whatsapp: string;
  
  @Column()
  city: string;
  
  @Column()
  uf: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ong }