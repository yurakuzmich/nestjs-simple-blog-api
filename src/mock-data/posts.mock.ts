import { Post, UserRole } from 'src/models';

export const posts: Post[] = [
  {
    id: 1,
    title: 'First Post',
    content: 'A veeeery long content of the first post',
    author: {
      id: 1,
      name: 'Yura',
      email: 'yurakuzmich@gmail.com',
      password: '12345',
      role: UserRole.admin,
      posts: [],
      viewedPosts: [],
    },
    viewers: [],
  },
];
