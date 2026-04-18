import { cn } from "@sglara/cn";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export default function PostHeading({ children, url, as: Tag = 'h2', className = '' }: PostHeadingProps) {
  const headingClassMap = {
    h1: 'text-2xl/tight sm:text-4xl/tight',
    h2: 'text-xl/tight sm:text-xl/tight',
    h3: 'text-lg/tight sm:text-2xl/tight',
    h4: 'text-base/tight sm:text-xl/tight',
    h5: 'text-sm/tight sm:text-lg/tight',
    h6: 'text-xs/tight sm:text-base/tight',
  }
  return (
    <div>
      <Tag className={cn(headingClassMap[Tag], 'font-extrabold')}>
        <Link href={url} className={className}>
          {children}
        </Link>
      </Tag>
    </div>
  );
}