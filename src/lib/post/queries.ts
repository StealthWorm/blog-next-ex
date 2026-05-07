import { jsonPostRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

// Cache the query to avoid re-fetching the data on every render
export const findAllPublicPostsCached = cache(
  async () => await jsonPostRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await jsonPostRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);
  if (!post) notFound();
  return post;
});