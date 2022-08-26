import { Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { User } from '../entities';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public findUser(search: string): Promise<User[]> {
    if (search) {
      return this.userRepo.find({
        where: { fullname: ILike(`%${search}%`) },
        relations: ['address'],
      });
    }
    return this.userRepo.find({
      relations: ['address'],
    });
  }
}
