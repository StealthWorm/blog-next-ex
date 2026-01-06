import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
              Blog
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

