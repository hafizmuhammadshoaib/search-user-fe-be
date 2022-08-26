import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'city',
    type: 'varchar',
  })
  city: string;

  @Column({
    name: 'country',
  })
  country: string;

  @Column({
    name: 'street_address',
    type: 'varchar',
  })
  streetAddress: string;

  @Column({
    name: 'user_id',
    type: 'int',
    unique: true,
  })
  userId: number;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
