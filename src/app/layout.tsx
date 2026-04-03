import type { Metadata, Viewport } from "next";
import ThemeHydration from "@/components/ThemeHydration";
import { THEME_LS_KEY } from "@/lib/theme-constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
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
        {children}
      </body>
    </html>
  );
}
