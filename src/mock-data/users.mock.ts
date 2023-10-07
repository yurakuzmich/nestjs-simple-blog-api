import { IUser, UserRole } from 'src/models';

export const users: IUser[] = [
  {
    id: '1',
    name: 'Yura',
    email: 'yurakuzmich@gmail.com',
    password: '12345',
    role: UserRole.admin,
    posts: [],
    viewedPosts: [],
  },
];
