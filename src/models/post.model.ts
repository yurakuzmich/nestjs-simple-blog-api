import { IUser } from './user.model';

export interface IPost {
  id: string;
  title: string;
  content: string;
  author: IUser;
  viewers: IUser[];
}
