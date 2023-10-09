import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/services/auth.service';
// import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('LOGIN ENDPOINT');
    // return user;

    return this.authService.login(req.user);
  }
}
