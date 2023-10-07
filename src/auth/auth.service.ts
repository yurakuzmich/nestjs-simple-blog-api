import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async checkUser(useremail: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(useremail);

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
