"use client";

import { THEME_LS_KEY, THEME_STORE_UPDATE } from "./theme-constants";

export { THEME_LS_KEY, THEME_STORE_UPDATE } from "./theme-constants";

export type ThemeChoice = "light" | "dark" | "system";

/** Alinha `class="dark"` no `<html>` com `localStorage` ou com o SO (Tailwind v4: variante `dark` em `globals.css`). */
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
  window.dispatchEvent(new Event(THEME_STORE_UPDATE));
}

export function getThemeChoice(): ThemeChoice {
  if (typeof window === "undefined") return "system";
  const t = localStorage.getItem(THEME_LS_KEY);
  if (t === "light" || t === "dark") return t;
  return "system";
}
