import { Suspense } from "react";
import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { PostFeatured } from "@/components/PostFeatured";
import { ServerComponent } from "@/components/ServerComponent";
import { ClientComponent } from "@/components/ClientComponent";

export default function Home() {
  return (
    <>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>

      <Suspense fallback={<SpinLoader containerClassName='min-h-20 mb-16' />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
