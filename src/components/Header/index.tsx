import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { cn } from "@sglara/cn";

type HeaderProps = {
  title: string;
  className?: string;
}
export default function Header({ title = "The Blog", className = "" }: HeaderProps) {
  return (
    <header className="flex gap-3 justify-between items-center">
      <h1 className={cn(
        "text-4xl/normal font-extrabold py-8 leading-tight",
        'sm:text-5xl/normal sm:py-10',
        'md:text-6xl/normal md:py-12',
        'lg:text-7xl/normal lg:py-14',
        className)
      }>
        <Link href="/">
          {title}
        </Link>
      </h1>

      <ThemeSwitcher />
    </header>
  );
}