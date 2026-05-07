import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
  create(post: PostModel): Promise<PostModel>;
  update(post: PostModel): Promise<PostModel>;
  delete(id: string): Promise<void>;
  findBySlug(slug: string): Promise<PostModel | null>;
}