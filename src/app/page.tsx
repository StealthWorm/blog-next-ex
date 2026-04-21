import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { Suspense } from "react";
import Container from "@components/Container";
import Header from "@/components/Header";
import { PostFeatured } from "@/components/PostFeatured";

export default function Home() {
  return (
    <Container>
      <Header title="The Blog" />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="border-t border-foreground/10 bg-background p-4">
        <p className="text-center text-foreground">Footer</p>
      </footer>
    </Container>
  );
}
