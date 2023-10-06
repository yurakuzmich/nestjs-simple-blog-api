import { User, UserRole } from 'src/models';

export const users: User[] = [
  {
    id: 1,
    name: 'Yura',
    email: 'yurakuzmich@gmail.com',
    password: '12345',
    role: UserRole.admin,
    posts: [],
    viewedPosts: [],
  },
];
