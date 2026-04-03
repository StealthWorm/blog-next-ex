"use client";

import { applyThemeClass } from "@/lib/theme";
import { useLayoutEffect } from "react";

/**
 * O script no `<head>` aplica o tema antes da pintura; este efeito corrige o caso em que
 * a hidratação do React remove `class="dark"` do `<html>`.
 */
export default function ThemeHydration() {
  useLayoutEffect(() => {
    applyThemeClass();
  }, []);
  return null;
}
