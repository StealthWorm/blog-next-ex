import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import fs from 'fs/promises';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src', 'app', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await fs.readFile(JSON_POST_FILE_PATH, 'utf8');
    return JSON.parse(fileContent).posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    return posts.find(post => post.id === id) || null;
  }

  async findBySlugPublic(slug: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    return posts.find(post => post.slug === slug) ?? null;
  }
}