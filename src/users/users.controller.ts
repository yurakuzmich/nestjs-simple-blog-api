import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IUser } from './../models';
import { users } from '../mock-data/users.mock';

@Controller('users')
export class UsersController {
  @Get()
  allUsers(): IUser[] {
    return users;
  }

  @Get(':id')
  getUserById(@Param() params: any) {
    const user = users.find((user) => Number(user.id) === Number(params.id));

    return user;
  }

  @Post()
  createPost(@Body() user: IUser) {
    users.push(user);

    return 'added!!!';
  }
}
