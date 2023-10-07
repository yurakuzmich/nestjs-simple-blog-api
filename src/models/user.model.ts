import { IPost } from './post.model';

export enum UserRole {
  admin = 'admin',
  user = 'user',
}

export interface IUser {
  id: string;
  name: string;
  email: string; // unique
  password: string;
  role: UserRole;
  posts: IPost[];
  viewedPosts: IPost[];
}
