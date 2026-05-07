import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/app/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel | null> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.slug, slug),
    }) ?? null;

    return post;
  }

  findAll(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<PostModel | null> {
    throw new Error('Method not implemented.');
  }
  create(post: PostModel): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  update(post: PostModel): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach(post => console.log(post.slug, post.published));
})();