"use client";

import {
  applyThemeClass,
  getThemeChoice,
  setThemeChoice,
  THEME_LS_KEY,
  type ThemeChoice,
} from "@/lib/theme";
import { useCallback, useEffect, useState } from "react";

const options: { value: ThemeChoice; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
  { value: "system", label: "Sistema" },
];

export default function ThemeSwitcher() {
  const [choice, setChoice] = useState<ThemeChoice>("system");

  useEffect(() => {
    setChoice(getThemeChoice());
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsChange = () => {
      if (localStorage.getItem(THEME_LS_KEY) !== null) return;
      applyThemeClass();
    };
    mq.addEventListener("change", onOsChange);
    return () => mq.removeEventListener("change", onOsChange);
  }, []);

  const onSelect = useCallback((value: ThemeChoice) => {
    setThemeChoice(value);
    setChoice(getThemeChoice());
  }, []);

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-1 rounded-lg border border-foreground/15 bg-foreground/5 p-1 text-xs sm:text-sm"
      role="group"
      aria-label="Tema da interface"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onSelect(value)}
          className={`rounded-md px-2 py-1.5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
            choice === value
              ? "bg-background text-foreground shadow-sm ring-1 ring-foreground/20"
              : "text-foreground/80 hover:bg-foreground/10"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
