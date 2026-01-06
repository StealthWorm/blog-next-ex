import Navigation from '@components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Bem-vindo ao Blog
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Esta é a página inicial
          </p>
        </div>
      </div>
    </>
  );
}
