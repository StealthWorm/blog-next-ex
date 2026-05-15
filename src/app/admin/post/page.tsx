import SpinLoader from '@/components/SpinLoader';
import PostsListAdmin from '@/components/PostListAdmin';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader containerClassName='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}