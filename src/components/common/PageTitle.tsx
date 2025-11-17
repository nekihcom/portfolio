interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex h-[100px] max-w-[768px] items-center">
        <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
          {children}
        </h1>
      </div>
    </div>
  );
}

