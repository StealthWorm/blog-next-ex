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

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAll();
    return posts.find(post => post.id === id) || null;
  }

  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.findAll();
    posts.push(post);
    return post;
  }

  async update(post: PostModel): Promise<PostModel> {
    const posts = await this.findAll();
    const index = posts.findIndex(p => p.id === post.id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    posts[index] = post;
    return post;
  }

  async delete(id: string): Promise<void> {
    const posts = await this.findAll();
    const filteredPosts = posts.filter(post => post.id !== id);
    await fs.writeFile(JSON_POST_FILE_PATH, JSON.stringify({ posts: filteredPosts }, null, 2));
  }
}

// (async () => {
//   const posts = await jsonPostRepository.findById('be3f14a1-0105-4e2e-bfc9-133a05e7bda60');
//   console.log(posts);
// })();