import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async getPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { author: true, viewers: true },
    });
  }

  async getPostById(
    PostWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: PostWhereUniqueInput,
      include: { author: true },
    });
  }

  async addPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }
}
