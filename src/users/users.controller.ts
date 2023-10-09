import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async allUsers(): Promise<User[]> {
    return await this.usersService.getUsers({});
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.usersService.getUserById(id);
  }

  // @Post()
  // async getUserByEmail(@Body() user) {
  //   return await this.usersService.getUserByEmail(user.email);
  // }

  @Post()
  async createUser(@Body() user) {
    console.log(user);

    return await this.usersService.addUser(user);
  }
}
