import Navigation from '@components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Sobre Nós
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Esta é a página sobre do blog. Aqui você pode adicionar informações sobre o projeto.
          </p>
        </div>
      </div>
    </>
  );
}

