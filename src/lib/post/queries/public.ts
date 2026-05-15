import { unstable_cache } from "next/cache";
import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

// Do not wrap the callback in React `cache()` — it runs inside Next's
// workUnitAsyncStorage for unstable_cache and can yield undefined / bad cache
// entries when combined with incremental cache + tags.
export const findAllPublicPostsCached = cache(
  unstable_cache(
    async () => {
      return await postRepository.findAllPublic();
    },
    ['posts'],
    {
      tags: ['posts'],
    },
  ),
);

export const findPublicPostBySlugCached = cache((slug: string) => {
  return unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    },
    [`post-${slug}`],
    { tags: [`post-${slug}`] },
  )(slug);
});