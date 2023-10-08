import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IUser } from './../models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  allUsers(): IUser[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() params: any) {
    const user = this.usersService.getUserById(params.id);

    return user;
  }

  @Post()
  createUser(@Body() user: IUser) {
    this.usersService.addUser(user);

    return user;
  }
}
