import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../services';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findUser(@Query('search') search: string) {
    return await this.userService.findUser(search);
  }
}
