import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { Suspense } from "react";
import Container from "@components/Container";
import Header from "@/components/Header";
import PostHeading from "@/components/PostHeading";
import PostCover from "@/components/PostCover";

export default function Home() {
  return (
    <Container>
      <Header title="The Blog" />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCover
          linkProps={{ href: "#" }}
          imgProps={{
            src: "/images/bryen_1.png",
            alt: "Blog",
            width: 1200,
            height: 720,
            priority: true,
          }}
        />

        <div className="flex flex-col gap-3 sm:justify-center">
          <time
            dateTime="2026-04-03"
            className="text-slate-600 text-sm/tight block"
          >
            2026/04/03 10:00
          </time>

          <PostHeading url="#" as="h1">Rotina matinal de pessoas altamente eficazes</PostHeading>

          <p className="text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam consequuntur iste,
            explicabo officiis id, quaerat dicta perspiciatis minima et sapiente voluptas neque
            perferendis deleniti sunt ut cum? Necessitatibus, fuga.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="border-t border-foreground/10 bg-background p-4">
        <p className="text-center text-foreground">Footer</p>
      </footer>
    </Container>
  );
}
