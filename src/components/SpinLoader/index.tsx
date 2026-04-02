import { cn } from "@sglara/cn";

type SpinLoaderProps = {
  containerClassName?: string;
}
export default function SpinLoader({ containerClassName }: SpinLoaderProps) {
  return (
    <div className={cn("flex justify-center items-center h-screen overflow-hidden", containerClassName)}>
      <div className="h-32 w-32 animate-spin rounded-full border-5 border-foreground/20 border-t-foreground">

      </div>
    </div>
  );
}