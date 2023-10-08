import { Injectable } from '@nestjs/common';
import { posts as allPosts } from './../mock-data/posts.mock';
import { IPost } from './../models';

@Injectable()
export class PostsService {
  posts: IPost[];

  constructor() {
    this.posts = allPosts;
  }

  getAllPosts() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.find((post) => post.id === id);
  }

  addPost(post: IPost) {
    this.posts.push(post);
  }
}
