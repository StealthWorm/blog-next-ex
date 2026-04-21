import { PostModel } from '@/models/post/post-model';
import PostCover from '@/components/PostCover';
import { jsonPostRepository } from '@repositories/post';
import PostHeading from '@/components/PostHeading';
import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';

export default async function PostsList() {

  const posts = await jsonPostRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post: PostModel) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="group flex flex-col gap-4">
            <PostCover
              linkProps={{ href: postLink }}
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
                title={formatDistanceToNow(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p className="text-foreground/80">{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}