import { Post } from './post.model';

export enum UserRole {
  admin = 'admin',
  user = 'user',
}

export interface User {
  id: number;
  name: string;
  email: string; // unique
  password: string;
  role: UserRole;
  posts: Post[];
  viewedPosts: Post[];
}
