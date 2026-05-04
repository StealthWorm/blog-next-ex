import SpinLoader from '@/components/SpinLoader';
import { SinglePost } from '@/components/SinglePost';
import { findPostBySlugCached, findAllPublicPostsCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return {
    title: `${post.title} | The Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await findAllPublicPostsCached();
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  return params;
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader containerClassName='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
