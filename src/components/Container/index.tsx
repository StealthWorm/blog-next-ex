type ContainerProps = {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-8">
        {children}
      </div>
    </div>
  );
}