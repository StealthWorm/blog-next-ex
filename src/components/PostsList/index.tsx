import { findAllPublicPosts } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';
import PostCover from '@/components/PostCover';
import { PostSummary } from '@/components/PostSummary';

export default async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.slice(1).map((post: PostModel) => {
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
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}