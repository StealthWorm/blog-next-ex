import { PostModel } from '@/models/post/post-model';
import PostCover from '@/components/PostCover';
import { jsonPostRepository } from '@repositories/post';
import PostHeading from '@/components/PostHeading';

export default async function PostsList() {

  const posts = await jsonPostRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post: PostModel) => (
        <div key={post.id} className="group flex flex-col gap-4">
          <PostCover
            linkProps={{ href: `/post/${post.slug}` }}
            imgProps={{
              src: post.coverImageUrl,
              alt: post.title,
              width: 1200,
              height: 720,
              priority: true,
            }}
          />
          <div className="flex flex-col gap-3 sm:justify-center">
            <time
              dateTime={post.createdAt}
              className="text-slate-600 text-sm/tight block"
            >
              {new Date(post.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
            <PostHeading url={`/post/${post.slug}`} as="h2">
              {post.title}
            </PostHeading>
            <p className="text-foreground/80">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}