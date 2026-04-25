type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <h1 className="py-16 text-7xl font-extrabold">Rota dinamica: {slug}</h1>
  );
}
