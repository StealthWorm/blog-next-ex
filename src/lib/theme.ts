/** Mesma chave usada na documentação do Tailwind e no script do `layout.tsx`. */
export const THEME_LS_KEY = "theme";

export type ThemeChoice = "light" | "dark" | "system";

/** Alinha `class="dark"` no `<html>` com `localStorage` ou com o SO. */
export function applyThemeClass(): void {
  const t = localStorage.getItem(THEME_LS_KEY);
  const dark =
    t === "dark" ||
    (t === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function setThemeChoice(choice: ThemeChoice): void {
  if (choice === "system") {
    localStorage.removeItem(THEME_LS_KEY);
  } else {
    localStorage.setItem(THEME_LS_KEY, choice);
  }
  applyThemeClass();
}

export function getThemeChoice(): ThemeChoice {
  const t = localStorage.getItem(THEME_LS_KEY);
  if (t === "light" || t === "dark") return t;
  return "system";
}
