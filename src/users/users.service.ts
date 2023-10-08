import { Injectable } from '@nestjs/common';
import { IUser } from './../models';
import { users as mockedUsers } from './../mock-data/users.mock';

@Injectable()
export class UsersService {
  users: IUser[];

  constructor() {
    this.users = mockedUsers;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  getUserByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }

  addUser(user: IUser) {
    this.users.push(user);
  }
}
