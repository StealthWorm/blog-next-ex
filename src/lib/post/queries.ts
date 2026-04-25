import { jsonPostRepository } from '@/repositories/post';
import { cache } from 'react';

// Cache the query to avoid re-fetching the data on every render
export const findAllPublicPosts = cache(
  async () => await jsonPostRepository.findAllPublic(),
);