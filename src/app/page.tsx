import SpinLoader from "@components/SpinLoader";
import PostsList from "@components/PostsList";
import { Suspense } from "react";
import Container from "@components/Container";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Header title="The Blog" />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link
          href="#"
          className="h-full w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/images/bryen_0.png"
            alt="Blog"
            width={1200}
            height={720}
            className="w-full h-full object-cover object-center group-hover:opacity-80 group-hover:scale-105 transition-all"
            priority
          />
        </Link>
        <div className="flex flex-col sm:justify-center">
          <time
            dateTime="2026-04-03"
            className="text-slate-600 text-sm/tight block"
          >
            2026/04/03 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold mb-4 sm:text-4xl/tight">
            <Link href="#">Rotina matinal de pessoas altamente eficazes</Link>
          </h1>
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
