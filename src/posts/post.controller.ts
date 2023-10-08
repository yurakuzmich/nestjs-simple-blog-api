import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { posts } from '../mock-data/posts.mock';
import { IPost } from '../models';

@Controller('post')
export class PostController {
  @Get()
  allPosts(): IPost[] {
    return posts;
  }

  @Get(':id')
  getPostById(@Param() params: any) {
    const post = posts.find((post) => Number(post.id) === Number(params.id));

    return post;
  }

  @Post()
  createPost(@Body() post: IPost) {
    posts.push(post);

    return 'added!!!';
  }
}
