import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async checkUser(useremail: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(useremail);

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };
    console.log(user);

    return { access_token: this.jwtService.sign(payload) };
  }
}
