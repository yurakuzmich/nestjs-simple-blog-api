import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostController } from './post.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PostsService, PrismaService],
  controllers: [PostController],
})
export class PostsModule {}
