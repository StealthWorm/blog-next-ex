import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import fs from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src', 'app', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await fs.readFile(JSON_POST_FILE_PATH, 'utf8');
    return JSON.parse(fileContent).posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    return posts.find(post => post.id === id) || null;
  }

  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.findAllPublic();
    posts.push(post);
    return post;
  }

  async update(post: PostModel): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const index = posts.findIndex(p => p.id === post.id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    posts[index] = post;
    return post;
  }

  async delete(id: string): Promise<void> {
    const posts = await this.findAllPublic();
    const filteredPosts = posts.filter(post => post.id !== id);
    await fs.writeFile(JSON_POST_FILE_PATH, JSON.stringify({ posts: filteredPosts }, null, 2));
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post not found for given slug');

    return post;
  }
}