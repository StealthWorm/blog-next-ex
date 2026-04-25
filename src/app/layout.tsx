import type { Metadata, Viewport } from "next";
import { THEME_LS_KEY } from "@/lib/theme-constants";
import ThemeHydration from "@/components/ThemeHydration";
import Container from '@/components/Container';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Este é um blog com Next.js', // título padrão
    template: '%s | The Blog', // %s é substituído pelo título da página
  },
  description: "Blog de notícias",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

/** Roda no parse do HTML (antes do React). Mesma lógica que `applyThemeClass` / Tailwind `html.dark`. */
const themeBootScript = `(function(){try{var k='${THEME_LS_KEY}';var t=localStorage.getItem(k);var dark=t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);}catch(e){}})();`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <ThemeHydration />
        <Container>
          <Header title="The Blog - Posts" />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
