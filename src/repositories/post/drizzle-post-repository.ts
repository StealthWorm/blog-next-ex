import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/app/db/drizzle';
import { logColor } from '@/utils/log-color';

export class DrizzlePostRepository implements PostRepository {
  create(post: PostModel): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  update(post: PostModel): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findAllPublic(): Promise<PostModel[]> {
    logColor('findAllPublic', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    logColor('findBySlugPublic', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) => and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error('Post não encontrado para slug');

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    logColor('findAll', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel | null> {
    logColor('findById', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para id');

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAllPublic();

//   posts.forEach(post => console.log(post.slug, post.published));
// })();