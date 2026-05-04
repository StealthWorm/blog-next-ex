import { Suspense } from "react";
import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { PostFeatured } from "@/components/PostFeatured";

export default function Home() {
  return (
    <Suspense fallback={<SpinLoader containerClassName='min-h-20 mb-16' />}>
      <PostFeatured />
      <PostsList />
    </Suspense>
  );
}
