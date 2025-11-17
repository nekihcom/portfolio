interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="w-full px-8 sm:px-6">
      <div className="mx-auto flex h-[100px] max-w-2xl sm:max-w-3xl lg:max-w-5xl items-center">
        <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
          {children}
        </h1>
      </div>
    </div>
  );
}

