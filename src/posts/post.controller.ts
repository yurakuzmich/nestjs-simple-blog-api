import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as prismaPost } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private postsService: PostsService) {}

  @Get()
  async allPosts(@Query() query): Promise<prismaPost[]> {
    console.log(query);

    return await this.postsService.getPosts(query);
  }

  @Get(':id')
  async getPostById(@Param() params: any) {
    return await this.postsService.getPostById({ id: Number(params.id) });
  }

  @Post()
  async createPost(@Body() post) {
    return await this.postsService.addPost(post);
  }
}
