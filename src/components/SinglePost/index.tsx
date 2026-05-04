import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import PostHeading from '@/components/PostHeading';
import { PostDate } from '@/components/PostDate';
import { SafeMarkdown } from '@/components/SafeMarkdown';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (

    <article className='mb-16'>
      <header className='group flex flex-col gap-4 mb-4'>
        <Image
          className='rounded-xl ring-1 ring-slate-900/8 dark:ring-white/12'
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p className='text-slate-600 dark:text-slate-400'>
          {post.author} &#8226; <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className='mb-4 text-xl text-slate-700 dark:text-slate-300'>
        {post.excerpt}
      </p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}