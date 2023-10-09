import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IUser } from './../models';
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
  getUserById(@Param() params: any) {
    const user = this.usersService.getUserById(params.id);

    return user;
  }

  @Post()
  async getUserByEmail(@Body() user) {
    return await this.usersService.getUserByEmail(user.email);
  }

  @Post()
  async createUser(@Body() user) {
    return await this.usersService.addUser(user);
  }
}
