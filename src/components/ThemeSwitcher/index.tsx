"use client";

import {
  applyThemeClass,
  getThemeChoice,
  setThemeChoice,
  THEME_LS_KEY,
  THEME_STORE_UPDATE,
  type ThemeChoice,
} from "@/lib/theme";
import { useCallback, useSyncExternalStore } from "react";

const options: { value: ThemeChoice; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
  { value: "system", label: "Sistema" },
];

function subscribeToThemeChoice(onStoreChange: () => void) {
  const onUpdate = () => onStoreChange();
  window.addEventListener(THEME_STORE_UPDATE, onUpdate);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== THEME_LS_KEY && e.key !== null) return;
    onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onOsChange = () => {
    if (localStorage.getItem(THEME_LS_KEY) !== null) return;
    applyThemeClass();
    onStoreChange();
  };
  mq.addEventListener("change", onOsChange);
  return () => {
    window.removeEventListener(THEME_STORE_UPDATE, onUpdate);
    window.removeEventListener("storage", onStorage);
    mq.removeEventListener("change", onOsChange);
  };
}

export default function ThemeSwitcher() {
  const choice = useSyncExternalStore(
    subscribeToThemeChoice,
    () => getThemeChoice(),
    () => "system",
  );

  const onSelect = useCallback((value: ThemeChoice) => {
    setThemeChoice(value);
  }, []);

  return (
    <div
      className="flex flex-wrap h-fit items-center justify-center gap-1 rounded-lg border border-foreground/15 bg-foreground/5 p-1 text-xs sm:text-sm"
      role="group"
      aria-label="Tema da interface"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onSelect(value)}
          className={`rounded-md px-2 py-1.5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${choice === value
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
