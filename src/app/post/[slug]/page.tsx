import SpinLoader from '@/components/SpinLoader';
import { SinglePost } from '@/components/SinglePost';
import { findPublicPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);
  return {
    title: `${post.title} | The Blog`,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader containerClassName='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
