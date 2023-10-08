import { Injectable } from '@nestjs/common';
import { IUser } from './../models';
import { users as mockedUsers } from './../mock-data/users.mock';

@Injectable()
export class UsersService {
  private readonly users: IUser[];

  constructor() {
    this.users = mockedUsers;
  }

  async getUserById(id: string): Promise<IUser | undefined> {
    return this.users.find((u) => u.id === id);
  }

  async getUserByEmail(email: string): Promise<IUser | undefined> {
    return this.users.find((u) => u.email === email);
  }
}
