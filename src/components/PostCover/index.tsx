import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "@sglara/cn";

type PostCoverProps = {
  linkProps: ComponentProps<typeof Link>
  imgProps: ComponentProps<typeof Image>
}

export default function PostCover({ linkProps, imgProps }: PostCoverProps) {
  return (
    <Link
      href={linkProps.href}
      className={cn(
        "h-full w-full overflow-hidden rounded-xl",
        linkProps.className,
      )}
    >
      <Image
        src={imgProps.src}
        alt={imgProps.alt}
        width={imgProps.width || 1200}
        height={imgProps.height || 720}
        className={cn(
          "w-full h-full object-cover object-center group-hover:opacity-80 group-hover:scale-105 transition-all",
          imgProps.className,
        )}
        priority={imgProps.priority}
      />
    </Link>
  );
}