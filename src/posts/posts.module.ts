import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostController } from './post.controller';

@Module({
  providers: [PostsService],
  controllers: [PostController],
})
export class PostsModule {}
