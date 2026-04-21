import PostHeading from "../PostHeading";
import PostCover from "../PostCover";

export default function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCover
        linkProps={{ href: postLink }}
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

        <PostHeading url={postLink} as="h1" className="text-slate-400">
          Rotina matinal de pessoas altamente eficazes
        </PostHeading>

        <p className="text-foreground/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam consequuntur iste,
          explicabo officiis id, quaerat dicta perspiciatis minima et sapiente voluptas neque
          perferendis deleniti sunt ut cum? Necessitatibus, fuga.
        </p>
      </div>
    </section>
  );
}