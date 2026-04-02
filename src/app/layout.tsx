import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { THEME_LS_KEY } from "@/lib/theme";
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

/** Anti-FOUC: mesma ideia do exemplo “spaghetti.js” na documentação do Tailwind. */
const themeBoot = `(function(){try{var t=localStorage.getItem('${THEME_LS_KEY}');var d=t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        {children}
      </body>
    </html>
  );
}
