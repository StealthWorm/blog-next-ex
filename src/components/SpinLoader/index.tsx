import { cn } from "@sglara/cn";

type SpinLoaderProps = {
  containerClassName?: string;
}
export default function SpinLoader({ containerClassName }: SpinLoaderProps) {
  return (
    <div className={cn("flex justify-center items-center h-screen", containerClassName)}>
      <div className="h-32 w-32 border-5 border-t-transparent border-gray-900 animate-spin rounded-full">

      </div>
    </div>
  );
}