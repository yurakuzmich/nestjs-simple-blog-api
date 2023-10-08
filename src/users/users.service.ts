import { Injectable } from '@nestjs/common';
import { IUser } from './../models';
import { users as mockedUsers } from './../mock-data/users.mock';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  users: IUser[];

  constructor(private prisma: PrismaService) {
    this.users = mockedUsers;
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  getUserByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }

  async addUser(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }
}
