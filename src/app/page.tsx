import SpinLoader from "@components/SpinLoader";
import ThemeSwitcher from "@components/ThemeSwitcher";
import PostsList from "@components/PostsList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex flex-col items-center gap-3 border-b border-foreground/10 px-4 py-3 sm:flex-row sm:justify-between sm:gap-4">
        <h1 className="text-2xl font-bold text-foreground sm:text-4xl">Posts</h1>
        <ThemeSwitcher />
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="fixed bottom-0 w-full border-t border-foreground/10 bg-background p-4">
        <p className="text-center text-foreground">Footer</p>
      </footer>
    </div>
  );
}
