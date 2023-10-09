import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('CHECK USER');
    const user = await this.usersService.getUserByEmail(email);
    console.log('USER IS: ', user);

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.password };
    console.log('Payload in service is: ', payload);

    return { access_token: this.jwtService.sign(payload) };
  }
}
