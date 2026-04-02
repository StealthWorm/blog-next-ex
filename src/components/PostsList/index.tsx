import { PostModel } from '@/models/post/post-model';
import { jsonPostRepository } from '@repositories/post';

export default async function PostsList() {

  const posts = await jsonPostRepository.findAll();
  return (
    <div>
      {posts.map((post: PostModel) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}