import { Suspense } from "react";
import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { PostFeatured } from "@/components/PostFeatured";

export default function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
