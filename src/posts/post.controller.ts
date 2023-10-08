import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IPost } from '../models';
import { PostsService } from './posts.service';

@Controller('post')
export class PostController {
  constructor(private postsService: PostsService) {}

  @Get()
  allPosts(): IPost[] {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param() params: any) {
    console.log(params);
    const post = this.postsService.getPostById(params.id);

    return post;
  }

  @Post()
  createPost(@Body() post: IPost) {
    this.postsService.addPost(post);

    return post;
  }
}
