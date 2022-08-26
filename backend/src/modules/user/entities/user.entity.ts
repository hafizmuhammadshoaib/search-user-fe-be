import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'fullname',
    type: 'varchar',
  })
  fullname: string;

  @Column({
    name: 'email',
    unique: true,
    type: 'varchar',
  })
  email: string;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn({
    name: 'id',
  })
  address: Address[];
}
