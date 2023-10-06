import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  allPosts(): string {
    return 'Posts';
  }
}
